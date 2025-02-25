import { useState } from 'react';
import Button from './components/button/Button';
import { useDialog } from './hooks';
import {
  // Loading,
  Empty,
} from './components/element';
import { InputText, Select, InputNumber, TextArea, Checkbox } from './components/input';
import { LabeledText } from './components/text';
import RadioGroup from './components/radio/RadioGroup';

const App = () => {
  const dialog = useDialog();
  const [isChecked, setIsChecked] = useState(false);
  const [radio, setRadio] = useState<string | number>('option_1');

  return (
    <div className="w-screen p-16">
      <div className="mb-16">
        <Button
          text="테스트 버튼"
          size="l"
          display="block"
          color="dark"
          option="filled"
          className="mt-20"
          onClick={() => {
            dialog.alert({
              type: 'info',
              title: '제목',
              content: '내용입니다.',
            });
          }}
        />
        <Empty message="장바구니가 비어있어요." />
        <InputText
          required
          label="배송지1"
          InnerButton={<Button size="m" text="검색" option="filled" color="dark" />}
          className="mb-16"
        />
        <InputText label="배송지2" className="mb-16" disabled />
        <InputNumber label="숫자만썽" required className="mb-16" />
        <Select
          options={[
            { value: '테스트1', label: '테스트1' },
            { value: '테스트2', label: '테스트2' },
            { value: '테스트3', label: '테스트3' },
            { value: '테스트4', label: '테스트4' },
            { value: '테스트5', label: '테스트5' },
          ]}
          className="mb-16"
        />
        <TextArea maxLength={100} className="mb-16" />
        <LabeledText textBold label="상품 가격" text="168,000원" />
        <LabeledText labelBold textColored label="상품 할인" text="-33,600원" />
        <LabeledText labelBold label="등급 할인" text="-33,600원" />
        <LabeledText label="배송비" textBold text="-33,600원" />
        <Checkbox
          label="품절제외"
          isChecked={isChecked}
          onClick={() => {
            setIsChecked((prev) => !prev);
          }}
          className="mb-16 mt-16"
        />
        <RadioGroup
          value={radio}
          onChange={(targetValue) => {
            setRadio(targetValue);
          }}
          options={[
            { value: 'option_1', label: 'Option A' },
            { value: 'option_2', label: 'Option B' },
            { value: 'option_3', label: 'Option C' },
          ]}
          isVertical
        />
        {/* <Loading overlay /> */}
      </div>
    </div>
  );
};

export default App;
