import Radio from './Radio';

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
  return (
    <div className={`${!isVertical && 'flex'} flex-wrap`}>
      {options?.map((option) => (
        <Radio
          key={option.value}
          isChecked={option.value === value}
          label={option.label}
          onClick={() => {
            if (onChange) onChange(option.value || '');
          }}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
