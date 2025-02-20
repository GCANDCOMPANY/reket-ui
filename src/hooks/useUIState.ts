import { useReducer } from 'react';
import { AlertInterface } from '../types/app';

interface ActionInterface {
  type: 'UPDATE_ALERT' | 'UPDATE_TOAST';
  payload: StateInterface;
}

export interface StateInterface {
  alert: AlertInterface;
  toast: any;
}

export const initialState: StateInterface = {
  alert: {
    title: '',
    content: '',
    type: 'confirm',
    isOpen: false,
  },
  toast: {},
};

export const useUIState = () => {
  const [state, dispatch] = useReducer((state: StateInterface, action: ActionInterface) => {
    switch (action.type) {
      case 'UPDATE_ALERT':
        return {
          ...state,
          alert: {
            ...state.alert,
            ...action.payload.alert,
          },
        };
      case 'UPDATE_TOAST':
        return {
          ...state,
          toast: {
            ...state.toast,
            ...action.payload.toast,
          },
        };
      default:
        return state;
    }
  }, initialState);

  const updateAlertState = (alertState: AlertInterface) => {
    dispatch({ type: 'UPDATE_ALERT', payload: { ...state, alert: alertState } });
  };

  const updateToastState = (toastState: any) => {
    dispatch({ type: 'UPDATE_TOAST', payload: { ...state, toast: toastState } });
  };

  return { state, updateAlertState, updateToastState };
};
