# コンポーネント定義
MUIの TextField をベースに、onChange で全角→半角変換を行う最も一般的なアプローチをコンポーネント化します。

```js
import React, { useState, useCallback, useEffect, useRef } from 'react'; // useRefをインポート
import { TextField, TextFieldProps } from '@mui/material';

// --- zenkakuToHankaku 関数をコンポーネントの外に定義 ---
/**
 * 全角数字を半角数字に変換し、数字と小数点以外の文字を削除するヘルパー関数。
 * @param {string | number | null | undefined} input - 変換対象の値。
 * @returns {string} 半角数字のみを含む文字列。
 */
const zenkakuToHankaku = (input: string | number | null | undefined): string => {
  if (input === undefined || input === null) return '';
  const str = String(input); // 入力を必ず文字列に変換
  return str.replace(/[０-９]/g, (s) =>
    String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
  ).replace(/[^0-9.]/g, ''); // 数字と小数点以外を削除（小数点も許容する場合）
  // 小数点を許容しない場合は .replace(/[^0-9]/g, '');
};
// --- ここまで ---

interface FullWidthNumberFieldProps extends Omit<TextFieldProps, 'value' | 'onChange' | 'type'> {
  value?: string | number | null;
  onValueChange?: (value: string) => void;
  min?: number;
  max?: number;
}

const FullWidthNumberField: React.FC<FullWidthNumberFieldProps> = ({
  value: controlledValue,
  onValueChange,
  min,
  max,
  label = '数値',
  placeholder = '全角数字も入力できます',
  onChange: muiOnChange,
  helperText: externalHelperText,
  ...restProps
}) => {
  const [internalValue, setInternalValue] = useState<string>(() => {
    // ここで直接 zenkakuToHankaku を呼び出す
    return zenkakuToHankaku(controlledValue);
  });
  const [error, setError] = useState<boolean>(false);
  const [internalHelperText, setInternalHelperText] = useState<string>('');

  // --- IME compositionフラグを追加 ---
  const isComposing = useRef(false);

  useEffect(() => {
    // ここでも直接 zenkakuToHankaku を呼び出す
    const convertedValue = zenkakuToHankaku(controlledValue);
    if (convertedValue !== internalValue) {
      setInternalValue(convertedValue);
      // controlledValueが変更された際にバリデーションも再実行
      validateAndSetError(convertedValue);
    } else if (controlledValue === null || controlledValue === undefined) {
      // controlledValueがnull/undefinedになった場合に内部値をクリア
      setInternalValue('');
      validateAndSetError('');
    }
  }, [controlledValue, internalValue, min, max, restProps.required]); // バリデーションに関連する依存関係を追加

  // バリデーションロジックを分離したヘルパー関数
  const validateAndSetError = useCallback((currentValue: string) => {
    let hasError: boolean = false;
    let currentHelperText: string = '';

    if (restProps.required && currentValue === '') {
      hasError = true;
      currentHelperText = '入力は必須です。';
    } else if (currentValue !== '') {
      const numValue = Number(currentValue);
      if (isNaN(numValue)) {
        hasError = true;
        currentHelperText = '有効な半角数字を入力してください。';
      } else if (min !== undefined && numValue < min) {
        hasError = true;
        currentHelperText = `${min}以上の値を入力してください。`;
      } else if (max !== undefined && numValue > max) {
        hasError = true;
        currentHelperText = `${max}以下の値を入力してください。`;
      }
    }
    setError(hasError);
    setInternalHelperText(currentHelperText);
    return hasError; // バリデーション結果を返す
  }, [min, max, restProps.required]);

  const handleInternalChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    // --- composition中ではない場合のみ処理を実行 ---
    if (!isComposing.current) {
      const hankakuValue = zenkakuToHankaku(inputValue); // ここでも呼び出す
      setInternalValue(hankakuValue); // 表示値を半角に更新
      // バリデーションを実行
      validateAndSetError(hankakuValue);

      // 親コンポーネントに変換後の値を通知
      if (onValueChange) {
        onValueChange(hankakuValue);
      }
      if (muiOnChange) {
        muiOnChange({
          ...event,
          target: {
            ...event.target,
            value: hankakuValue,
          },
        });
      }
    } else {
      // composition中の場合は、input要素の表示はIMEに任せるため、
      // internalValueの更新は行わない。
      // ただし、外部のonChangeも必要であれば、inputValue（未変換）を渡す
      if (muiOnChange) {
         muiOnChange(event); // composition中はIMEが入力値を制御するため、未変換の値を渡す
      }
    }
  }, [onValueChange, muiOnChange, validateAndSetError]);

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={internalValue}
      onChange={handleInternalChange}
      type="text"
      error={error}
      helperText={error ? internalHelperText : (externalHelperText || '全角数字も半角に変換されます。')}
      // --- compositionイベントハンドラを追加 ---
      onCompositionStart={() => { isComposing.current = true; }}
      onCompositionEnd={(event) => {
        isComposing.current = false;
        // compositionが終了した際に、確定された値で再度変換処理を実行
        // ここでhandleInternalChangeを直接呼び出すと、event.target.valueが確定後の値になる
        handleInternalChange(event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
      }}
      {...restProps}
      inputProps={{
        ...restProps.inputProps
      }}
    />
  );
};

export default FullWidthNumberField;
```

# 活用例
```js
import React, { useState } from 'react';
import FullWidthNumberField from './FullWidthNumberField'; // 作成したコンポーネントをインポート
import { Box, Typography, Button, Container } from '@mui/material';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// --- ライトモードとダークモードのテーマを定義 ---
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f0f2f5', // 明るい背景色
      paper: '#ffffff',
    },
    text: {
      primary: '#212121', // 暗い文字色
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212', // 暗い背景色
      paper: '#1d1d1d', // カードやコンポーネントの背景色
    },
    text: {
      primary: '#e0e0e0', // 明るい文字色
      secondary: '#bdbdbd',
    },
  },
});

function App() {
  // ユーザー設定やシステム設定に基づいてテーマを切り替えるロジック
  const [isDarkMode, setIsDarkMode] = useState(true); // 例: 初期はダークモード
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  // useStateのジェネリクスで型を明示 (string or number)
  const [price, setPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [controlledAmount, setControlledAmount] = useState<string>('123');
  const [age, setAge] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `送信された値:\n価格: ${price}\n数量: ${quantity}\n制御された値: ${controlledAmount}\n年齢: ${age}`
    );
    console.log('価格:', price);
    console.log('数量:', quantity);
    console.log('制御された値:', controlledAmount);
    console.log('年齢:', age);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      {/* CssBaselineはMUIの推奨するCSSリセットとダークモードの背景色適用に役立つ */}
      <CssBaseline />
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Theme ({isDarkMode ? 'Dark' : 'Light'})
      </button>

      <Container maxWidth="sm">
        <Box
          component="form"
          {% raw %}
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, p: 3 }}
          {% endraw %}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" gutterBottom>
            TypeScript版 全角数値入力フォームの例
          </Typography>

          {/* 価格入力フィールド */}
          <FullWidthNumberField
            label="価格"
            value={price}
            onValueChange={setPrice} // 変換後の値を受け取るカスタムプロパティ
            min={0}
            max={1_000_000} // タイプセーフな数値リテラル
            required
            name="price"
            placeholder="全角で価格を入力"
            helperText="0から1,000,000の範囲"
          />
          {/* 数量入力フィールド */}
          <FullWidthNumberField
            label="数量"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)} // TextField標準のonChangeも使用可能
            min={1}
            required
            name="quantity"
            sx={{ width: '15ch' }}
            helperText="1以上の値を入力"
          />
          {/* 年齢入力フィールド (整数のみ想定) */}
          <FullWidthNumberField
            label="年齢"
            value={age}
            onValueChange={setAge}
            min={0}
            max={120}
            name="age"
            placeholder="全角で年齢を入力"
            helperText="0から120の整数を入力"
            // 小数点を受け付けないようにするには、FullWidthNumberField.tsxのzenkakuToHankaku関数を修正
            // .replace(/[^0-9.]/g, ''); を .replace(/[^0-9]/g, ''); に変更
          />
          </div>
          <div>
          {/* 外部から値を制御する例 */}
          <FullWidthNumberField
            label="制御された金額"
            value={controlledAmount} // 親で値を完全に管理
            onValueChange={setControlledAmount}
            name="controlledAmount"
            placeholder="外部から値が設定"
            helperText="初期値が設定されており、ボタンで変更可能"
          />
          <Button variant="outlined" onClick={() => setControlledAmount('5000')} sx={{ mr: 1 }}>
            金額を5000に設定
          </Button>
          <Button variant="outlined" onClick={() => setControlledAmount('あ１２３')}>
            不正値を設定 (自動変換)
          </Button>
          <Button variant="outlined" onClick={() => setControlledAmount(null)} sx={{ ml: 1 }}>
            クリア
          </Button>
        </div>

        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained">
            送信
          </Button>
        </Box>

        <Typography variant="h6" sx={{ mt: 3 }}>
          現在のフォーム状態:
        </Typography>
        <Typography variant="body1">
          **価格**: `{price || '未入力'}` (型: {typeof price})
        </Typography>
        <Typography variant="body1">
          **数量**: `{quantity || '未入力'}` (型: {typeof quantity})
        </Typography>
        <Typography variant="body1">
          **制御された金額**: `{controlledAmount || '未入力'}` (型: {typeof controlledAmount})
        </Typography>
        <Typography variant="body1">
          **年齢**: `{age || '未入力'}` (型: {typeof age})
        </Typography>
      </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
```

# コンポーネントのポイントと改善点
  1.  プロップスの拡張:
      - onValueChange(string): このカスタムプロパティは、MUIの標準 onChange イベントとは別に、半角変換後の値のみを引数として受け取るコールバックを提供します。これにより、親コンポーネントは変換済みのクリーンな値を直接利用できます。
      - min, max: 数値の最小値・最大値を指定できるようにしました。これに基づいて内部でバリデーションを行います。
      - label, placeholder, required, disabled, name, value など、MUI TextField の標準プロパティもそのまま ...restProps で受け取り、TextField に渡せるようにしています。
  1.  内部状態管理:
      - internalValue: TextField に実際に表示される値を保持します。これにより、ユーザーが全角で入力しても、internalValue は半角に変換された値になるため、表示も半角になります。
      - error, helperText: バリデーション結果に基づいてエラー表示を制御します。
  1.  zenkakuToHankaku 関数の改良:
      - useCallback でメモ化し、不要な再レンダリングを防ぎます。
      - /[^0-9.]/g を使用して、数字と小数点以外の文字を削除するようにしました。もし整数値のみを扱いたい場合は /[^0-9]/g に変更してください。
  1.  バリデーションロジック:
      - required プロパティに対応した必須チェック。
      - isNaN(Number(hankakuValue)) で数値としての妥当性チェック。
      - min と max プロパティによる範囲チェック。
      - これらのバリデーション結果に基づいて error と helperText を更新します。
  1.  制御コンポーネントとしての挙動:
      - value: controlledValue プロパティを受け取ることで、親コンポーネントから値を完全に制御できるようにしています（典型的なReactの制御コンポーネントのパターン）。
      - useEffect を使って、controlledValue が外部から変更されたときに internalValue を更新し、TextField の表示に反映させます。
  1.  onChange と onValueChange の使い分け:
      - FullWidthNumberField に onChange を渡すと、MUIの TextField が持つ本来の onChange イベントハンドラとして機能し、event.target.value には変換後の半角値が設定されます。
      - onValueChange は、よりシンプルに変換後の値だけを受け取りたい場合に便利です。
  1.  type="text" の維持:
      - 全角文字の入力を可能にするため、MUI TextField の type は "text" のままにしておきます。
      - モバイルデバイスでの数値キーパッド表示のためのヒント (inputMode, pattern) は inputProps を通じて渡せるようにしています。

このコンポーネントを使用することで、アプリケーション内のどこでも簡単に全角数値対応の入力フィールドを配置し、統一されたバリデーションと変換ロジックを適用できます。

# TypeScriptでの主な変更点
  1.  プロパティの型定義 (FullWidthNumberFieldProps):
      - interface FullWidthNumberFieldProps extends Omit<TextFieldProps, 'value' | 'onChange' | 'type'>
        - MUIの TextFieldProps を継承することで、標準の TextField が持つすべてのプロパティを FullWidthNumberField でも利用できるようにします。
        - Omit<..., 'value' | 'onChange' | 'type'> を使用して、TextField のデフォルトの value, onChange, type プロパティを除外しています。これは、これらのプロパティの型をカスタムで再定義するためです。
      - value?: string | number | null;: value プロパティは文字列だけでなく数値や null も受け入れられるように柔軟に定義しました。内部では String() で文字列に変換します。
      - onValueChange?: (value: string) => void;: onValueChange コールバックの引数が string であることを明示しています。
      - min?: number;, max?: number;: min と max が number 型であることを指定します。
  1.  React.FC の使用:
      - const FullWidthNumberField: React.FC<FullWidthNumberFieldProps> = ({ ... }) => { ... };
        - 関数コンポーネントに React.FC (または React.FunctionComponent) を適用し、ジェネリクスで FullWidthNumberFieldProps を渡すことで、プロパティの型チェックを有効にします。
  1.  useState の型アノテーション:
      - const [internalValue, setInternalValue] = useState<string>(...);
      - const [error, setError] = useState<boolean>(false);
      - const [internalHelperText, setInternalHelperText] = useState<string>('');
        - useState フックのジェネリクスで、各ステート変数が保持する値の型を明示しています。これにより、値の代入時や使用時に型安全性が確保されます。
  1.  イベントハンドラの型定義:
      - handleInternalChange の引数 event に React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> の型を付与することで、event.target.value などのプロパティに適切にアクセスできるようになります。
      - handleSubmit の引数 event に React.FormEvent<HTMLFormElement> の型を付与しています。
  1.  zenkakuToHankaku 関数の型定義:
      - 引数 str と戻り値に string 型を明示しています。

TypeScriptを導入することで、開発中に型に関するエラーを早期に発見でき、コードの可読性と保守性が向上します。特に、大規模なアプリケーションや複数人での開発においてその恩恵は大きいです。

# 初期化エラー解消のポイント:

- zenkakuToHankaku 関数を FullWidthNumberField コンポーネントの外に定義しました。

  これにより、コンポーネントがレンダリングされる前にこの関数がグローバルスコープ（またはモジュールスコープ）で利用可能になり、useState の初期化子から安全に呼び出せるようになります。

- useCallback の依存配列から zenkakuToHankaku を削除しました（もはやコンポーネントのスコープにないため）。
  useEffect 内でも zenkakuToHankaku を直接呼び出します。

- バリデーションロジックを validateAndSetError という別の useCallback 関数に分離し、useEffect と handleInternalChange の両方から呼び出せるようにしました。

  これにより、初期値のバリデーションと入力中のバリデーションで同じロジックを共有できます。

# 履歴
- 0.1: 初版（JavaScript版）
- 0.2: TypeScript版
    
  主な変更点としては、プロパティの型定義、関数の引数・戻り値の型付け、そしてuseStateなどのReact Hooksに対する型アノテーションが挙げられます。

- 0.3: 初期化エラー解消版

  zenkakuToHankaku 関数が useState の初期化子内で参照されているため、その関数がまだ定義されていない段階で呼び出され、エラーとなる可能性がありますね。

  この問題の主な原因は、JavaScript（およびTypeScript）の実行順序にあります。コンポーネネントの関数本体が実行される際、useState の初期化が先に評価され、その時点ではまだ zenkakuToHankaku が useCallback で完全にセットアップされていないためです。

  解消案：

  - useState の初期化子内で zenkakuToHankaku を呼び出す代わりに、直接変換ロジックを記述するか、あるいは通常の関数としてコンポーネント外に定義して、常に利用可能にするのが最もシンプルで確実な解決策です。

- 0.4: 
  1.  全角で入力すると1回で2文字入ってしまう

      この現象は、Reactの制御コンポーネントの仕組みと、日本語IME（Input Method Editor）のcompositionイベントの連携に起因することが多いです。

      原因の解説:
      1.  IMEのComposition（変換確定前）:

          日本語入力（IME）を使用している場合、ユーザーがキーボードで文字を入力すると、通常はまず変換候補（composition）が入力フィールドに一時的に表示されます。例えば、「てすと」と入力するために「t」「e」「s」「u」「t」「o」と打つと、その都度、IMEが一時的に「て」「てす」「てすと」といった文字列をフィールドに表示します。この間はまだ文字が確定していません。

      1.  ReactのonChangeイベント:

          ReactのTextField（またはinput要素）は、入力フィールドの値が変更されるたびにonChangeイベントを発火させます。IMEによるcomposition中も、このイベントは発火します。

      1.  制御コンポーネントの挙動:

          あなたのFullWidthNumberFieldは制御コンポーネントです。これは、valueプロパティがReactのステートによって管理され、onChangeイベントハンドラ内でそのステートを更新することで、入力フィールドの表示を完全に制御することを意味します。

          - ユーザーが何か入力する
          - onChangeイベントが発火
          - handleInternalChangeが呼び出される
          - zenkakuToHankakuで変換処理
          - setInternalValueでステート更新
          - Reactが入力フィールドを再レンダリングし、新しいvalue（半角変換後の値）を強制的に表示

      なぜ2文字入るのか？

        IMEで全角文字を入力しようとしているとき（例：「あ」と打つために「a」を入力し、IMEが「あ」と表示している状態）に、onChangeが発火し、そのイベントのevent.target.valueにはIMEが一時的に表示している文字が含まれます。

        - ユーザーが「a」と入力（IMEが「あ」と一時表示）
        - onChange発火。event.target.valueは「あ」。
        - zenkakuToHankakuが「あ」を処理しようとするが、これは数字ではないので除去されるか、変換ロジックによってはそのまま残る。
        - setInternalValueでinternalValueが更新され、Reactが入力フィールドを再レンダリング。
        - この再レンダリングにより、IMEのcompositionが中断され、確定前の「あ」が確定されてしまう。
        - ユーザーが次に打つキー（例：「i」で「い」）が、中断された状態のフィールドに入力され、まるで前の文字が強制的に入った後に次の文字が入ったかのように見える。

        特にIMEで全角数字を打とうとした場合（例：「１」と打つために「1」と入力し、IMEが「１」と表示している状態）、その「１」がzenkakuToHankakuで「1」に変換され、ステートが更新され再レンダリングされるため、IMEのcompositionが中断されてしまうのです。

      解消策: composition イベントの利用

        この問題は、IMEのcomposition中にはonChangeイベントによるvalueの強制的な更新を控えることで解決できます。input要素にはonCompositionStart, onCompositionUpdate, onCompositionEndというイベントがあります。

        1.  onCompositionStart: IMEによる入力が開始されたときに発火。
        1.  onCompositionEnd: IMEによる入力が確定したときに発火。

        これらのイベントを使って、IMEの変換が確定するまでonChangeイベントでのvalueの更新を一時的に停止するフラグを立てます。

  1.  ダークモードだと文字が見えない

      これは主にCSSスタイリングの問題です。MUIのTextFieldはデフォルトでMUIのテーマに沿った色を使用しますが、カスタムな環境や、特定の条件下で背景色と文字色のコントラストが低くなり、見えなくなることがあります。

      原因の解説:
      - 色の不一致: ダークモードのテーマが適用されているにも関わらず、入力フィールドの文字色が暗い（例えばデフォルトの黒や非常に濃いグレー）ままになっていたり、背景色が文字色と非常に近い色（例えば非常に濃いグレーと黒）になっていたりすると、文字が背景に溶け込んで見えなくなります。
      - カスタムスタイリングの上書き: もしFullWidthNumberFieldを使用している箇所で、何らかのCSS（グローバルCSS、カスタムコンポーネントのCSS、sxプロパティなど）で文字色や背景色を直接指定しており、それがダークモードのテーマ色を上書きしている場合も発生します。

      解消策:
        MUIのテーマを正しく設定する:

        MUIは、アプリケーション全体でダークモードをサポートするための強力なテーマ機能を提供しています。最も推奨されるのは、createTheme と ThemeProvider を使用して、適切にダークモードのパレットを設定することです。