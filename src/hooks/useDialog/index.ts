import { useUIContext } from '../../UIProvider';
import { AlertInterface, ToastInterface } from '../../types/app';

const useDialog = () => {
  const { updateAlertState, updateToastState } = useUIContext();

  const alert = ({ type = 'confirm', onCancel, onOk, title = '', content }: AlertInterface) => {
    updateAlertState({
      isOpen: true,
      type,
      onCancel,
      onOk,
      title,
      content,
    });
  };

  const toast = ({ type = 'success', title = '', content }: ToastInterface) => {
    updateToastState({
      isOpen: true,
      type,
      title,
      content,
    });
  };

  return {
    alert,
    toast,
  };
};

export default useDialog;
