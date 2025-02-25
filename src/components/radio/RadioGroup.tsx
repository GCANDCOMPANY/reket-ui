import Radio from './Radio';
import { RadioGroupContextProvider } from './context';

interface Option {
  value?: string | number;
  label?: string;
}

interface Props {
  value?: string | number;
  options: Option[];
  onChange?: (target: string | number) => void;
  isVertical?: boolean;
}

const RadioGroup = ({ value, options, onChange, isVertical = true }: Props) => {
  const onRadioChange = (targetValue: string | number) => {
    if (value !== targetValue && onChange) {
      onChange(targetValue);
    }
  };

  return (
    <RadioGroupContextProvider value={{ onRadioChange }}>
      <div className={`${!isVertical && 'flex'} flex-wrap`}>
        {options?.map((option) => (
          <Radio
            key={option.value}
            isChecked={option.value === value}
            label={option.label}
            value={option.value}
          />
        ))}
      </div>
    </RadioGroupContextProvider>
  );
};

export default RadioGroup;
