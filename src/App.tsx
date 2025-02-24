import Button from './components/button/Button';
import { useDialog } from './hooks';
import {
  // Loading,
  Empty,
} from './components/element';
import { InputText, Select, InputNumber, TextArea } from './components/input';
import { LabeledText } from './components/text';

const App = () => {
  const dialog = useDialog();

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
        <TextArea maxLength={100} />
        <LabeledText textBold label="상품 가격" text="168,000원" className="mb-10 mt-16" />
        <LabeledText labelBold textColored label="상품 할인" text="-33,600원" className="mb-10" />
        <LabeledText labelBold label="등급 할인" text="-33,600원" className="mb-10" />
        <LabeledText label="배송비" textBold text="-33,600원" className="mb-10" />
        {/* <Loading overlay /> */}
      </div>
    </div>
  );
};

export default App;
