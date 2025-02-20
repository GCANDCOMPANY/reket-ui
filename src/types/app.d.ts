export type AlertType = 'confirm' | 'success' | 'warn' | 'error' | 'info';

export interface AlertInterface {
  title: string;
  content?: string;
  type?: AlertType;
  isOpen?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

export interface StateInterface {
  alert: AlertInterface;
  toast: any;
}

interface ActionInterface {
  type: 'UPDATE_ALERT' | 'UPDATE_TOAST';
  payload: StateInterface;
}
