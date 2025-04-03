import { useReducer } from 'react';
import { StateInterface, ActionInterface } from '../types/app';

export const initialState: StateInterface = {
  alert: {
    title: '',
    content: '',
    type: 'confirm',
    isOpen: false,
  },
  toast: {
    title: '',
    content: '',
    type: 'success',
    isOpen: false,
  },
};

const reducer = (state: StateInterface, action: ActionInterface) => {
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
};

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
