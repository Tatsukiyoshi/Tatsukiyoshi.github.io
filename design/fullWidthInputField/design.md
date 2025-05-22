# コンポーネント定義
MUIの TextField をベースに、onChange で全角→半角変換を行う最も一般的なアプローチをコンポーネント化します。

```js
import React, { useState, useCallback, useEffect } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

// FullWidthNumberFieldに独自のPropsを追加するための型定義
// TextFieldPropsをOmitすることで、TextFieldのvalueとonChangeが
// カスタムプロパティによって上書きされるのを防ぎつつ、他のTextFieldのPropsを継承します。
interface FullWidthNumberFieldProps extends Omit<TextFieldProps, 'value' | 'onChange' | 'type'> {
  /**
   * コンポーネントが制御する現在の値。半角数字の文字列として扱われます。
   * 外部から初期値を設定したり、値を更新したりするために使用します。
   */
  value?: string | number | null;
  /**
   * 値が変更されたときに呼び出されるコールバック関数。
   * 引数には半角数字に変換された文字列値が渡されます。
   */
  onValueChange?: (value: string) => void;
  /**
   * 許容される数値の最小値。
   */
  min?: number;
  /**
   * 許容される数値の最大値。
   */
  max?: number;
}

/**
 * 全角数字の入力を受け付け、半角数字に変換して表示するMUI TextFieldコンポーネント。
 * 入力値の変換と基本的な数値バリデーションを内包します。
 */
const FullWidthNumberField: React.FC<FullWidthNumberFieldProps> = ({
  value: controlledValue, // 親から渡される制御された値
  onValueChange,
  min,
  max,
  label = '数値',
  placeholder = '全角数字も入力できます',
  onChange: muiOnChange, // TextFieldの標準onChangeは必要に応じて受け取る
  helperText: externalHelperText, // 外部から指定されるhelperText
  ...restProps
}) => {
  // 内部状態：TextFieldに表示される値（常に半角）
  const [internalValue, setInternalValue] = useState<string>(() => {
    if (controlledValue !== undefined && controlledValue !== null) {
      return zenkakuToHankaku(String(controlledValue));
    }
    return '';
  });
  const [error, setError] = useState<boolean>(false);
  const [internalHelperText, setInternalHelperText] = useState<string>('');

  // 親の controlledValue が変更された場合に internalValue を同期
  // これにより、親コンポーネントから値を外部的にリセットまたは変更できます。
  useEffect(() => {
    if (controlledValue !== undefined && controlledValue !== null) {
      const convertedValue = zenkakuToHankaku(String(controlledValue));
      if (convertedValue !== internalValue) {
        setInternalValue(convertedValue);
      }
    } else if (internalValue !== '') { // controlledValue が null/undefined になった場合、内部値をクリア
      setInternalValue('');
    }
  }, [controlledValue, internalValue]);


  /**
   * 全角数字を半角数字に変換し、数字と小数点以外の文字を削除するヘルパー関数。
   * 小数点を許容しない場合は .replace(/[^0-9]/g, ''); に変更してください。
   * @param {string} str - 変換対象の文字列。
   * @returns {string} 半角数字のみを含む文字列。
   */
  const zenkakuToHankaku = useCallback((str: string): string => {
    if (typeof str !== 'string') return '';
    return str.replace(/[０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    ).replace(/[^0-9.]/g, '');
  }, []);

  /**
   * TextFieldのonChangeイベントハンドラ。
   * 入力値の変換、内部状態の更新、バリデーション、親への通知を行います。
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - 変更イベントオブジェクト。
   */
  const handleInternalChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    const hankakuValue = zenkakuToHankaku(inputValue);
    setInternalValue(hankakuValue); // 表示値を半角に更新

    // --- バリデーションロジック ---
    let hasError: boolean = false;
    let currentHelperText: string = '';

    if (restProps.required && hankakuValue === '') {
      hasError = true;
      currentHelperText = '入力は必須です。';
    } else if (hankakuValue !== '') { // 値が存在する場合のみ数値バリデーション
      const numValue = Number(hankakuValue);
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

    // 親コンポーネントに変換後の値を通知
    if (onValueChange) {
      onValueChange(hankakuValue);
    }

    // もしTextFieldの標準onChangeが渡されていれば、それを呼び出す
    if (muiOnChange) {
      // イベントオブジェクトのtarget.valueを変換後の値に上書きして渡す
      // これにより、MUIのFormikやReact Hook Formなどとの連携がスムーズになります。
      muiOnChange({
        ...event,
        target: {
          ...event.target,
          value: hankakuValue,
        },
      });
    }
  }, [zenkakuToHankaku, onValueChange, muiOnChange, min, max, restProps.required]);

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={internalValue} // 常に半角の内部値を表示
      onChange={handleInternalChange}
      type="text" // 全角文字を受け入れるために'text'型を使用
      error={error}
      helperText={error ? internalHelperText : (externalHelperText || '全角数字も半角に変換されます。')}
      {...restProps} // その他のTextFieldPropsを適用
      inputProps={{
        // モバイルで数字キーボードを出すためのヒント（ブラウザ依存）
        // inputMode: 'numeric',
        // pattern: '[0-9]*',
        ...restProps.inputProps // 外部から渡されたinputPropsもマージ
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

function App() {
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
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, p: 3 }}
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

# 履歴
- 0.1： 初版（JavaScript版）
- 0.2： TypeScript版
    
  主な変更点としては、プロパティの型定義、関数の引数・戻り値の型付け、そしてuseStateなどのReact Hooksに対する型アノテーションが挙げられます。
