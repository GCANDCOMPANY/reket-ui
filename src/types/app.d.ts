export type AlertType = 'confirm' | 'success' | 'warn' | 'error' | 'info';

export interface AlertInterface {
  title: string;
  content?: string;
  type?: AlertType;
  isOpen?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}
