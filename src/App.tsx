import Button from './components/button/Button';
import { useDialog } from './hooks';
import {
  // Loading,
  Empty,
} from './components/element';
import { InputText, Select, InputMobile, InputNumber } from './components/input';

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
        <InputMobile label="연락처" className="mb-16" />
        <InputNumber label="숫자만썽" required className="mb-16" />
        <Select
          options={[{ value: '배송전 미리 연락바랍니다.', label: '배송전 미리 연락바랍니다.' }]}
          className="mb-16"
        />
        {/* <Loading overlay /> */}
      </div>
    </div>
  );
};

export default App;
