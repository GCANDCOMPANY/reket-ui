import { atom } from 'recoil';

const sidebarOpen = atom<boolean>({
  key: 'sidebarOpen',
  default: false,
});

export type NotificationType = 'general' | 'success' | 'error';
export interface NotificationState {
  isOpen: boolean;
  type: NotificationType;
  title: string;
  message: string;
}

const notificationState = atom<NotificationState>({
  key: 'notificationState',
  default: {
    isOpen: false,
    type: 'general',
    title: '',
    message: '',
  },
});

export type AlertType = 'confirm' | 'success' | 'warn' | 'error' | 'info';
export interface AlertState {
  isOpen: boolean;
  type: AlertType;
  title: string;
  message: string;
  onOk?: () => Promise<void> | void;
  onCancle?: () => Promise<void> | void;
}

const alertState = atom<AlertState>({
  key: 'alertState',
  default: {
    isOpen: false,
    type: 'info',
    title: '',
    message: '',
    onOk: () => {},
  },
});

export default {
  sidebarOpen,
  notificationState,
  alertState,
};
