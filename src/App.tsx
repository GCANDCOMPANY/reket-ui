import Button from './components/button/Button';
import { useDialog } from './hooks';
import { Loading, Empty } from './components/element';
import { InputText } from './components/input';

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
          placeholder="입력란을 작성해주세요."
          InnerButton={<Button size="m" text="검색" option="filled" color="dark" />}
          className="mb-16"
        />
        <InputText
          required
          label="배송지2"
          placeholder="입력란을 작성해주세요."
          className="mb-16"
        />
        <InputText placeholder="입력란을 작성해주세요." />
        {/* <Loading overlay /> */}
      </div>
    </div>
  );
};

export default App;
