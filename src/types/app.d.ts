export type AlertType = 'confirm' | 'success' | 'warn' | 'error' | 'info';
export type ToastType = 'success' | 'warn' | 'error' | 'info';

export interface AlertInterface {
  title: string;
  content?: string;
  type?: AlertType;
  isOpen?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

export interface ToastInterface {
  title: string;
  content?: string;
  type?: ToastType;
  isOpen?: boolean;
}

export interface StateInterface {
  alert: AlertInterface;
  toast: ToastInterface;
}

interface ActionInterface {
  type: 'UPDATE_ALERT' | 'UPDATE_TOAST';
  payload: StateInterface;
}
