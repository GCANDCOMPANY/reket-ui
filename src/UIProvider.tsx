import { createContext, useContext, useReducer } from 'react';
import { Alert } from './components/dialog';
import { AlertInterface } from './types/app';

interface ActionType {
  type: 'UPDATE_ALERT';
  payload: AlertInterface;
}

interface UIContextInterface {
  state: AlertInterface;
  updateAlertState: (alertState: AlertInterface) => void;
}

interface UIProviderProps {
  children: JSX.Element;
}

const initialState: AlertInterface = {
  title: '',
  content: '',
  type: 'confirm',
  isOpen: false,
};

const reducer = (state: AlertInterface, action: ActionType) => {
  switch (action.type) {
    case 'UPDATE_ALERT':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const UIContext = createContext<UIContextInterface>({
  state: initialState,
  updateAlertState: () => {},
});

export const UIProvider = ({ children }: UIProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateAlertState = (state: AlertInterface) => {
    dispatch({ type: 'UPDATE_ALERT', payload: state });
  };

  return (
    <UIContext.Provider value={{ state, updateAlertState }}>
      {children}
      <Alert />
    </UIContext.Provider>
  );
};

export const useUIContext = () => useContext(UIContext);
