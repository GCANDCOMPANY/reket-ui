import { mergeStyle } from '../../utils/style';
import InputLabel from './InputLabel';

interface Props {
  value?: number;
  label?: string;
  required?: boolean;
  className?: Tailwind.ClassNames;
  placeholder?: string;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber = ({
  value,
  label,
  required,
  className,
  placeholder,
  maxLength,
  onChange,
  ...props
}: Props): JSX.Element => {
  const containerClass = mergeStyle(`flex items-center `, className);

  return (
    <div className={containerClass}>
      {!!label && <InputLabel label={label} required={required} />}
      <input
        value={value}
        className="h-[44px] w-full flex-1 rounded-4 border-[1px] border-gray-3 px-12 text-16 font-light placeholder-gray-5 caret-dark-6 focus:border-dark-3 focus:outline-none"
        min={0}
        inputMode="numeric"
        type="number"
        onChange={(e) => {
          if (!!maxLength && e.target.value?.length > maxLength) {
            e.target.value = e.target.value?.substring(0, maxLength);
          }
          onChange?.(e);
        }}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputNumber;
