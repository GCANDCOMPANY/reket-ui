import { useUIContext } from '../UIProvider';
import { AlertInterface } from '../types/app';

const useDialog = () => {
  const { updateAlertState } = useUIContext();

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

  const toast = () => {};

  return {
    alert,
    toast,
  };
};

export default useDialog;
