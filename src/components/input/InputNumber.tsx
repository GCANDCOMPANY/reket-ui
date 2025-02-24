import { mergeStyle } from '../../utils/style';

interface Props {
  label?: string;
  required?: boolean;
  className?: Tailwind.ClassNames;
  placeholder?: string;
  maxLength?: number;
  onChange?: () => void;
}

const InputNumber = ({
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
      {label && (
        <label className="w-80 text-16 font-medium text-dark-6">
          {label}
          {required && <span className="text-red-6"> *</span>}
        </label>
      )}
      <input
        className={`h-[44px] w-full flex-1 rounded-4 border-[1px] border-gray-3 px-12 text-16 font-light placeholder-gray-5 focus:border-dark-3 focus:outline-none`}
        min={0}
        inputMode="numeric"
        type="number"
        onChange={(e) => {
          if (!!maxLength && e.target.value.length > maxLength) {
            e.target.value = e.target.value.substring(0, maxLength);
          }
          if (onChange) onChange();
        }}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputNumber;
