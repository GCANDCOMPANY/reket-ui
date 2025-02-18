import { createContext, useState } from 'react';
import { Alert } from './components/dialog';

interface Props {
  children: JSX.Element;
}

interface AlertState {
  isOpen: boolean;
  type: string;
  onCancel: () => void;
  onOk: () => void;
  title: string;
  content: string;
}

export const UIContext = createContext({
  alertState: {
    isOpen: false,
    type: 'confirm',
    onCancel: () => {},
    onOk: () => {},
    title: '',
    content: '',
  },
  changeAlertState: ({}: AlertState) => {},
});

export const UIProvider = ({ children }: Props): JSX.Element => {
  const [alertState, setAlertState] = useState<AlertState>({
    isOpen: false,
    type: 'confirm',
    onCancel: () => {},
    onOk: () => {},
    title: '',
    content: '',
  });

  const changeAlertState = ({ isOpen, type, onCancel, onOk, title, content }: AlertState) => {
    setAlertState((prev) => ({
      ...prev,
      isOpen,
      type,
      onCancel,
      onOk,
      title,
      content,
    }));
  };

  return (
    <UIContext.Provider value={{ alertState, changeAlertState }}>
      {children}
      <Alert />
    </UIContext.Provider>
  );
};
