import React, { useState } from 'react';
import { Modal } from './components/dialog';
import Button from './components/element/Button';
import { useDialog } from './hooks';
import {
  // Loading,
  Empty,
} from './components/element';
import { Input, Select, InputNumber, TextArea, Checkbox } from './components/formControls';
import { TwoColumnText, Heading } from './components/typography';
import RadioGroup from './components/radio/RadioGroup';

const App = () => {
  const dialog = useDialog();
  const [isChecked, setIsChecked] = useState(false);
  const [radio, setRadio] = useState<string | number>('option_1');
  const [inputValue, setInputValue] = useState('기본값');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-screen p-16">
      <Heading>hi1</Heading>
      <Heading level={2}>hi2</Heading>
      <Heading level={3} className="bg-primary">
        hi3
      </Heading>
      <div className="mb-16">
        <Button
          text="alert test 2"
          size="l"
          className="mr-15 mt-2 bg-black"
          onClick={() => {
            dialog.alert({
              type: 'error',
              title: '제목2',
              content: '내용입니다.',
            });
          }}
        />
        <Button
          text="modal test 1"
          size="l"
          color="purple"
          className="mr-15 mt-20"
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
        <Button
          text="toast test 1"
          size="l"
          color="red"
          className="mr-15 mt-20"
          onClick={() => {
            dialog.toast({
              type: 'warn',
              title: '제목2',
              content: '내용입니다.',
            });
          }}
        />
        <Empty message="장바구니가 비어있어요." />
        <form
          className="mb-20"
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());
          }}
        >
          <Input
            name="배송지1"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            required
            label="배송지1"
            InnerButton={<Button size="m" text="검색" option="filled" color="dark" />}
            className="mb-16"
          />
          <Input name="배송지2" label="배송지2" className="mb-16" />
          <Button type="submit">제출</Button>
        </form>
        <InputNumber label="숫자만썽" required className="mb-16" />
        <Select
          // options={[
          //   { value: '테스트1', label: '테스트1' },
          //   { value: '테스트2', label: '테스트2' },
          //   { value: '테스트3', label: '테스트3' },
          //   { value: '테스트4', label: '테스트4' },
          //   { value: '테스트5', label: '테스트5' },
          // ]}
          defaultOption={'테스트3'}
          options={['테스트1', '테스트2', '테스트3', '테스트4', '테스트5']}
          className="mb-16"
        />
        <TextArea maxLength={100} className="mb-16" />
        <TwoColumnText
          textBold
          label="상품 가격"
          text="168,000168,000168,000168,000168,000168,000168,000168,000168,000168,000168,000168,000168,00168,000168,000168,000168,000168,000168,000168,000168,000168,000168,000168,000168,000168,0000원"
        />
        <TwoColumnText labelBold textColored label="상품 할인" text="-33,600원" />
        <TwoColumnText labelBold label="등급 할인" text="-33,600원" />
        <TwoColumnText label="배송비" textBold text="-33,600원" />
        <TwoColumnText label="배송비" textBold text="-33,600원" />
        <TwoColumnText label="배송비" textBold text="-33,600원" />
        <TwoColumnText label="배송비" textBold text="-33,600원" />
        <Checkbox
          label="품절제외1"
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
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <h2>Title</h2>
          <p className="bg-primary">
            어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구v
          </p>
        </Modal>
      </div>
    </div>
  );
};

export default App;
