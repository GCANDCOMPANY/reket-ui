import { useSetRecoilState } from 'recoil';
import app from 'src/recoils/app';
import { AlertType, NotificationType } from 'src/recoils/app/atoms';

interface AlertInterface {
  type?: AlertType;
  title: string;
  message?: string;
  onOk?: () => Promise<void> | void;
  onCancle?: () => Promise<void> | void;
}

interface NotifyInterface {
  type?: NotificationType;
  title: string;
  message?: string;
}

const useDialog = () => {
  const setAlertState = useSetRecoilState(app.alertState);
  const setNotificationState = useSetRecoilState(app.notificationState);

  const alert = ({ type = 'info', title = '', message = '', onOk, onCancle }: AlertInterface) => {
    setAlertState({
      isOpen: true,
      type,
      onCancle,
      onOk,
      title,
      message,
    });
  };

  const notify = ({ type = 'general', title = '', message = '' }: NotifyInterface) => {
    setNotificationState({
      isOpen: true,
      type,
      title,
      message,
    });

    setTimeout(() => {
      setNotificationState((prev) => ({ ...prev, isOpen: false }));
    }, 3000);
  };

  return { alert, notify };
};

export default useDialog;
