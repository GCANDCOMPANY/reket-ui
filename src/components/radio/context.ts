import React from 'react';

interface RadioGroupContextInterface {
  onRadioChange: (targetValue: string | number) => void;
}

const RadioGroupContext = React.createContext<RadioGroupContextInterface>({
  onRadioChange: () => {},
});

export const RadioGroupContextProvider = RadioGroupContext.Provider;

export default RadioGroupContext;
