# コンポーネント定義
MUIの TextField をベースに、onChange で全角→半角変換を行う最も一般的なアプローチをコンポーネント化します。

```js
import React, { useState, useCallback } from 'react';
import { TextField } from '@mui/material';

/**
 * 全角数字の入力を受け付け、半角数字に変換して表示するTextFieldコンポーネント。
 * MUIのTextFieldをベースに、入力値の変換とバリデーションを内包します。
 *
 * @param {object} props - TextFieldに渡されるすべてのpropsに加え、以下のプロパティを拡張。
 * @param {function(string)} [props.onValueChange] - 値が変更されたときに、半角変換後の文字列値を引数に呼び出されるコールバック関数。
 * (MUIのTextFieldのonChangeとは別に、変換後の値に特化したイベントハンドラを提供)
 * @param {number} [props.min] - 許容される最小値。
 * @param {number} [props.max] - 許容される最大値。
 * @param {string} [props.label] - TextFieldのラベル。
 * @param {string} [props.placeholder] - TextFieldのプレースホルダー。
 * @param {boolean} [props.required] - 必須入力かどうか。
 * @param {boolean} [props.disabled] - 無効化するかどうか。
 * @param {string} [props.name] - input要素のname属性。
 * @param {string} [props.value] - コンポーネンの初期値または制御される値。
 */
const FullWidthNumberField = ({
  onValueChange, // カスタムのコールバック
  min,
  max,
  label = '数値', // デフォルトラベル
  placeholder = '全角数字も入力できます', // デフォルトプレースホルダー
  value: controlledValue, // 制御コンポーネントとして受け取るvalue
  onChange: muiOnChange, // MUI TextFieldのonChangeをそのまま渡す場合
  ...restProps // TextFieldに渡したいその他のprops
}) => {
  // 内部状態（TextFieldに表示される値）
  const [internalValue, setInternalValue] = useState(() => {
    // controlledValueがあればそれを初期値とし、変換も適用
    if (controlledValue !== undefined && controlledValue !== null) {
      return zenkakuToHankaku(String(controlledValue));
    }
    return '';
  });
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  // value propが変更されたときに内部状態を更新（制御コンポーネントとして機能させるため）
  React.useEffect(() => {
    if (controlledValue !== undefined && controlledValue !== null) {
      const convertedValue = zenkakuToHankaku(String(controlledValue));
      if (convertedValue !== internalValue) {
        setInternalValue(convertedValue);
      }
    }
  }, [controlledValue, internalValue]);


  // 全角数字を半角数字に変換し、数字以外の文字を削除するヘルパー関数
  const zenkakuToHankaku = useCallback((str) => {
    if (typeof str !== 'string') return ''; // 文字列以外が来たら空文字
    return str.replace(/[０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    ).replace(/[^0-9.]/g, ''); // 数字と小数点以外を削除（小数点も許容する場合）
    // 小数点を許容しない場合は . を削除 -> .replace(/[^0-9]/g, '');
  }, []);

  // TextFieldのonChangeハンドラ
  const handleInternalChange = useCallback((event) => {
    const inputValue = event.target.value;
    const hankakuValue = zenkakuToHankaku(inputValue);
    setInternalValue(hankakuValue); // 内部状態を更新

    // バリデーション
    let currentError = false;
    let currentHelperText = '';

    if (hankakuValue === '') {
      // 必須チェック
      if (restProps.required) {
        currentError = true;
        currentHelperText = '入力は必須です。';
      }
    } else if (isNaN(Number(hankakuValue))) {
      // 数値として不正な場合
      currentError = true;
      currentHelperText = '有効な半角数字を入力してください。';
    } else {
      const numValue = Number(hankakuValue);
      // 最小値チェック
      if (min !== undefined && numValue < min) {
        currentError = true;
        currentHelperText = `${min}以上の値を入力してください。`;
      }
      // 最大値チェック
      if (max !== undefined && numValue > max) {
        currentError = true;
        currentHelperText = `${max}以下の値を入力してください。`;
      }
    }

    setError(currentError);
    setHelperText(currentHelperText);

    // 外部に変換後の値を通知
    if (onValueChange) {
      onValueChange(hankakuValue);
    }
    // MUIのonChangeももし渡されていれば呼び出す
    if (muiOnChange) {
      // オリジナルのイベントオブジェクトのtarget.valueを変換後の値に上書きして渡す
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
      value={internalValue}
      onChange={handleInternalChange}
      type="text" // 全角入力を許可するためにtext型を使用
      error={error}
      helperText={helperText || restProps.helperText || '全角数字も半角に変換されます。'}
      {...restProps} // 渡されたその他のpropsをTextFieldに適用
      inputProps={{
        // inputMode: 'numeric', // モバイルで数字キーボードを出すためのヒント
        // pattern: '[0-9]*', // モバイルで数字キーボードを出すためのヒント
        ...restProps.inputProps // 元のinputPropsもマージする
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
import { Box, Typography, Button } from '@mui/material';

function App() {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [controlledAmount, setControlledAmount] = useState('123'); // 制御された値の例

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`送信された値:\n価格: ${price}\n数量: ${quantity}\n制御された値: ${controlledAmount}`);
    console.log('価格:', price);
    console.log('数量:', quantity);
    console.log('制御された値:', controlledAmount);
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, p: 3 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" gutterBottom>
        全角数値入力フォームの例
      </Typography>

      <div>
        <FullWidthNumberField
          label="価格"
          value={price}
          onValueChange={setPrice} // 変換後の値を受け取るカスタムプロパティ
          min={0}
          max={100000}
          required
          name="price"
          placeholder="全角で価格を入力"
          // helperText="0から100000の範囲" // 追加のヘルプテキスト
        />
        <FullWidthNumberField
          label="数量"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)} // TextField標準のonChangeも使える
          min={1}
          required
          name="quantity"
          sx={{ width: '15ch' }}
        />
      </div>
      <div>
        <FullWidthNumberField
          label="制御された金額"
          value={controlledAmount} // 親で値を管理
          onValueChange={setControlledAmount}
          name="controlledAmount"
          placeholder="外部から値が設定"
          helperText="初期値が設定されています"
        />
        <Button onClick={() => setControlledAmount('5000')}>
          金額を5000に設定
        </Button>
        <Button onClick={() => setControlledAmount('あ１２３')} sx={{ ml: 1 }}>
          不正値を設定
        </Button>
      </div>

      <Box sx={{ mt: 3 }}>
        <Button type="submit" variant="contained">
          送信
        </Button>
      </Box>

      <Typography variant="body1" sx={{ mt: 3 }}>
        現在の状態:
      </Typography>
      <Typography variant="body2">Price: {price || '未入力'}</Typography>
      <Typography variant="body2">Quantity: {quantity || '未入力'}</Typography>
      <Typography variant="body2">Controlled Amount: {controlledAmount || '未入力'}</Typography>
    </Box>
  );
}

export default App;
```

# 履歴
0.1：　初版（JavaScript版）
