import Button from './components/button/Button';
import { useDialog } from './hooks';

const App = () => {
  const dialog = useDialog();

  return (
    <div className="m-16 h-[200px] w-[450px] bg-gray-2 p-16">
      <div className="mb-16">
        <Button
          text="테스트 버튼"
          size="l"
          display="block"
          color="dark"
          option="filled"
          onClick={() => {
            dialog.alert({
              isOpen: true,
              type: 'confirm',
              title: '성공이다',
            });
          }}
        />
      </div>
    </div>
  );
};

export default App;
