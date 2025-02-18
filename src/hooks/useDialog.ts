import { useContext } from 'react';
import { UIContext } from '../UIProvider';

interface AlertState {
  isOpen: boolean;
  type: string;
  onCancel?: () => void;
  onOk?: () => void;
  title?: string;
  content?: string;
}

const useDialog = () => {
  const { changeAlertState } = useContext(UIContext);

  const alert = ({
    isOpen = true,
    type,
    onCancel = () => {},
    onOk = () => {},
    title = '',
    content = '',
  }: AlertState) => {
    changeAlertState({
      isOpen,
      type,
      onCancel,
      onOk,
      title,
      content,
    });
  };

  return {
    alert,
  };
};

export default useDialog;
