---
layout: page
---
# コンポーネント定義
Reactターゲットに作成した全角入力できる数値入力フィールドをVue.jsで利用できるコンポーネントを作成します。

```html
<!-- filepath: src/components/FullWidthNumberField.vue -->
<template>
  <v-text-field
    :label="label"
    :placeholder="placeholder"
    :value="displayValue"
    @input="handleInternalChange"
    @blur="handleInternalBlur"
    type="text"
    :error="error"
    :helper-text="error ? internalHelperText : (externalHelperText || defaultHelperText)"
    @compositionstart="isComposing = true"
    @compositionend="handleCompositionEnd"
    v-bind="$attrs"
  />
</template>

<script>
import { ref, computed, watch, onMounted, useCallback } from 'vue';

// 入力値を正規化する関数 (全角→半角、カンマ除去)
const normalizeAndRemoveCommas = (input) => {
  if (input === undefined || input === null) return '';
  let str = String(input);
  // 全角数字を半角に変換
  str = str.replace(/[０-９]/g, (s) =>
    String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
  );
  // 全角ピリオドを半角ピリオドに変換
  str = str.replace(/．/g, '.');
  // カンマを除去
  str = str.replace(/,/g, '');
  return str;
};

// 数値をカンマ区切り文字列にフォーマットする関数
const formatNumberWithCommas = (value, allowDecimal, decimalPlaces) => {
  if (value === null || value === undefined) return '';
  const valStr = String(value);

  if (valStr === '' || valStr === '-' || valStr === '.' || valStr === '-.') return valStr;

  const num = Number(valStr);

  if (isNaN(num)) {
    const parts = valStr.split('.');
    const integerPart = parts[0];
    const potentialDecimalPart = parts.length > 1 ? parts[1] : undefined;
    const intNumCheck = Number(integerPart);
    if (integerPart !== '' && !isNaN(intNumCheck)) {
      let formattedInt = Number(integerPart).toLocaleString('en-US', { maximumFractionDigits: 0 });
      if (allowDecimal && potentialDecimalPart !== undefined) {
        return `${formattedInt}.${potentialDecimalPart}`;
      }
      return formattedInt;
    }
    return valStr;
  }

  const options = {};
  if (!allowDecimal) {
    options.minimumFractionDigits = 0;
    options.maximumFractionDigits = 0;
  } else {
    if (decimalPlaces !== undefined) {
      options.minimumFractionDigits = decimalPlaces;
      options.maximumFractionDigits = decimalPlaces;
    } else {
      const decimalPartStr = valStr.split('.')[1];
      if (decimalPartStr) {
        options.minimumFractionDigits = decimalPartStr.length;
        options.maximumFractionDigits = decimalPartStr.length;
      } else {
        options.minimumFractionDigits = 0;
        options.maximumFractionDigits = 0;
      }
    }
  }
  return num.toLocaleString('en-US', options);
};

export default {
  name: 'FullWidthNumberField',
  props: {
    label: {
      type: String,
      default: '数値',
    },
    placeholder: {
      type: String,
      default: '全角数字も入力できます',
    },
    value: {
      type: [String, Number, null],
      default: null,
    },
    onValueChange: {
      type: Function,
      default: null,
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    allowDecimal: {
      type: Boolean,
      default: true,
    },
    decimalPlaces: {
      type: Number,
      default: null,
    },
    externalHelperText: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit, attrs }) {
    const internalValue = ref(normalizeAndRemoveCommas(props.value));
    const error = ref(false);
    const internalHelperText = ref('');
    const isComposing = ref(false);

    const validateAndSetError = useCallback((currentValue) => {
      let hasError = false;
      let currentHelperText = '';

      if (props.required && currentValue === '') {
        hasError = true;
        currentHelperText = '入力は必須です。';
      } else if (currentValue !== '') {
        const patternStr = props.allowDecimal ? `^-?\\d*(\\.\\d*)?$` : `^-?\\d*$`;
        const isValidNumericFormat = new RegExp(patternStr).test(currentValue);

        if (!isValidNumericFormat) {
          hasError = true;
          currentHelperText = props.allowDecimal
            ? '有効な半角数字、小数点、マイナス記号のみが許容されます。'
            : '有効な半角整数、マイナス記号のみが許容されます。';
        } else {
          const isInputInProgress = currentValue === '-' ||
                                 (props.allowDecimal && (currentValue === '.' || currentValue === '-.'));

          if (isInputInProgress) {
          } else {
            const numValue = Number(currentValue);
            if (isNaN(numValue)) {
              hasError = true;
              currentHelperText = '有効な半角数字を入力してください。';
            } else {
              if (props.allowDecimal && props.decimalPlaces !== null) {
                const parts = currentValue.split('.');
                if (parts.length > 1 && parts[1].length > props.decimalPlaces) {
                  hasError = true;
                  currentHelperText = `小数点以下は${props.decimalPlaces}桁までです。`;
                }
              }
              if (!hasError) {
                if (props.min !== null && numValue < props.min) {
                  hasError = true;
                  currentHelperText = `${props.min}以上の値を入力してください。`;
                }
                if (props.max !== null && numValue > props.max) {
                  hasError = true;
                  currentHelperText = `${props.max}以下の値を入力してください。`;
                }
              }
            }
          }
        }
      }
      error.value = hasError;
      internalHelperText.value = currentHelperText;
      return hasError;
    }, [props.min, props.max, props.required, props.allowDecimal, props.decimalPlaces]);

    const handleInternalBlur = () => {
      if (!isComposing.value) {
        const currentValue = internalValue.value;
        const hasErrorFromValidation = validateAndSetError(currentValue);

        if (!hasErrorFromValidation && props.allowDecimal && props.decimalPlaces !== null) {
          const numValue = Number(currentValue);
          if (!isNaN(numValue) && currentValue !== '' && currentValue !== '-' && currentValue !== '.') {
            const roundedValue = numValue.toFixed(props.decimalPlaces);
            if (roundedValue !== currentValue) {
              internalValue.value = roundedValue;
              validateAndSetError(roundedValue);
              if (props.onValueChange) {
                props.onValueChange(roundedValue);
              }
            }
          }
        }
      }
    };

    const handleInternalChange = (event) => {
      const inputValue = event.target.value;

      if (isComposing.value) {
        internalValue.value = inputValue;
        emit('change', event);
      } else {
        const normalizedValue = normalizeAndRemoveCommas(inputValue);
        internalValue.value = normalizedValue;
        validateAndSetError(normalizedValue);

        if (props.onValueChange) {
          props.onValueChange(normalizedValue);
        }
        emit('change', {
          ...event,
          target: {
            ...event.target,
            value: normalizedValue,
          },
        });
      }
    };

    const handleCompositionEnd = (event) => {
      isComposing.value = false;
      handleInternalChange(event);
    };

    watch(
      () => props.value,
      (newVal) => {
        if (!isComposing.value) {
          const normalized = normalizeAndRemoveCommas(newVal);
          if (normalized !== internalValue.value) {
            internalValue.value = normalized;
            validateAndSetError(normalized);
          }
        }
      }
    );

    const displayValue = computed(() => {
      return (isComposing.value || error.value)
        ? internalValue.value
        : formatNumberWithCommas(internalValue.value, props.allowDecimal, props.decimalPlaces);
    });

    const defaultHelperText = computed(() => {
      return props.allowDecimal ? '全角数字も半角に変換されます。' : '全角整数も半角に変換されます。';
    });

    onMounted(() => {
      validateAndSetError(internalValue.value);
    });

    return {
      internalValue,
      error,
      internalHelperText,
      isComposing,
      handleInternalChange,
      handleInternalBlur,
      handleCompositionEnd,
      displayValue,
      defaultHelperText,
    };
  },
};
</script>
```

## コンポーネントのポイント
このコンポーネントは、Vuetifyのv-text-fieldをベースにしています。
もしVuetifyを使用していない場合は、`<template>` 内の v-text-field を、Vue.jsの標準の`<input>`要素に置き換える必要があります。

## Vuetifyを使う場合の設定として推奨される内容

Vuetifyを使用する場合、以下の設定が推奨されます。

1.  **Vuetifyのインストール:**

    ```bash
    npm install vuetify@next
    # または
    yarn add vuetify@next
    ```
2.  **Vuetifyプラグインの登録:**

    `main.js`または`main.ts`ファイルで、VuetifyプラグインをVueアプリケーションに登録します。

    ```javascript
    // main.js または main.ts
    import { createApp } from 'vue'
    import App from './App.vue'

    // Vuetify
    import 'vuetify/styles'
    import { createVuetify } from 'vuetify'
    import * as components from 'vuetify/components'
    import * as directives from 'vuetify/directives'

    const vuetify = createVuetify({
      components,
      directives,
    })

    const app = createApp(App)
    app.use(vuetify)
    app.mount('#app')
    ```

3.  **テーマの設定:**

    Vuetifyのテーマを設定することで、コンポーネントの色やスタイルをカスタマイズできます。ダークモードをサポートする場合は、`theme`オプションで`dark: true`を設定します。

    ```javascript
    // main.js または main.ts
    import { createVuetify } from 'vuetify'

    const vuetify = createVuetify({
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          },
          dark: {
            primary: '#2196F3',
            secondary: '#424242',
            accent: '#FF4081',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          }
        }
      }
    })
    ```

4.  **CssBaselineの適用:**

    MUIと同様に、Vuetifyも`CssBaseline`を提供しています。これを適用することで、ブラウザ間のスタイルの差異を吸収し、一貫したUIを実現できます。

    ```vue
    // App.vue
    <template>
      <v-app>
        <v-main>
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </v-main>
      </v-app>
    </template>

    <script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
      name: 'App',
      components: {
        HelloWorld,
      },
    }
    </script>
    ```

これらの設定を行うことで、Vuetifyのコンポーネントを最大限に活用し、テーマに沿ったスタイリングを実現できます。また、ダークモードのサポートや、ブラウザ間のスタイルの差異を吸収することも可能です。

## 使用方法
このコンポーネントを使用するには、以下のように記述します。

1.  App.vue
    ```vue
    <template>
      <FullWidthNumberField
        label="価格"
        :value="price"
        @update:value="price = $event"
        :min="0"
        :max="1000000"
        required
        name="price"
        placeholder="全角で価格を入力"
        helper-text="0から1,000,000の範囲"
        :allow-decimal="true"
      />
      <FullWidthNumberField
        label="数量"
        :value="quantity"
        @update:value="quantity = $event"
        :min="1"
        required
        name="quantity"
        placeholder="数量を入力"
        helper-text="1以上の整数を入力"
        :allow-decimal="false"
      />
    </template>

    <script>
    import { ref } from 'vue';
    import FullWidthNumberField from './components/FullWidthNumberField.vue';

    export default {
      components: {
        FullWidthNumberField,
      },
      setup() {
        const price = ref('');
        const quantity = ref('');

        return {
          price,
          quantity,
        };
      },
    };
    </script>
    ```

    この例では、`FullWidthNumberField` コンポーネントを使用し、`price` と `quantity` というリアクティブな変数に値をバインドしています。`@update:value` イベントを使用して、コンポーネントから親コンポーネントに値を伝播しています。`allow-decimal`プロパティを`true`または`false`に設定することで、小数点以下の入力を許可するかどうかを制御できます。

1.  main.ts

    ```javascript
    // main.js または main.ts
    import { createApp } from 'vue'
    import App from './App.vue'

    // Vuetify
    import 'vuetify/styles'
    import { createVuetify } from 'vuetify'
    import * as components from 'vuetify/components'
    import * as directives from 'vuetify/directives'

    const vuetify = createVuetify({
      components,
      directives,
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          },
          dark: {
            primary: '#2196F3',
            secondary: '#424242',
            accent: '#FF4081',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          }
        }
      }
    })

    const app = createApp(App)
    app.use(vuetify)
    app.mount('#app')
    ```

##  履歴
- 0.1:
  - React用0.6版をベースに仕様化
    - `v-text-field` を使用するようにテンプレートを更新
    - `setup` 関数を使用して、リアクティブな状態とメソッドを定義
    - `watch` を使用して、props.value の変更を監視し、内部状態を更新
    - `emit` を使用して、イベントを親コンポーネントに伝播
    - `onMounted` を使用して、コンポーネントのマウント後にバリデーションを実行

- 0.2:
  - React用0.7.1版で最新化
    - allowDecimalプロパティとdecimalPlacesプロパティを追加
    - `validateAndSetError`関数を更新し、allowDecimalとdecimalPlacesに基づいてバリデーションを行うようにしました。
    - `handleInternalBlur`関数を更新し、整数のみを許可するフィールドで小数点付きの数値が入力された場合にエラーとするようにしました。
    - displayValueをcomputedプロパティに変更し、IME入力中またはエラー時はinternalValueをそのまま表示するようにしました。
    - defaultHelperTextをcomputedプロパティに変更し、allowDecimalの設定に応じてヘルパーテキストを変更するようにしました。

  - Vuetify用の設定を加味
