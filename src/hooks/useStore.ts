import { useReducer } from 'react';
import { StateInterface, ActionInterface } from '../types/app';

export const initialState: StateInterface = {
  alert: {
    title: '',
    content: '',
    type: 'confirm',
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
    default:
      return state;
  }
};

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
