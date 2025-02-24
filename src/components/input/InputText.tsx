import { mergeStyle } from '../../utils/style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  className?: Tailwind.ClassNames;
  fontSize?: number;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  InnerButton?: JSX.Element;
}

const InputText = ({
  required = false,
  className = '',
  label = '',
  fontSize = 16,
  InnerButton,
  placeholder = '입력란을 작성해주세요.',
  disabled = false,
  ...props
}: Props): JSX.Element => {
  const textSize = `text-${fontSize}`;
  const containerClass = mergeStyle(`flex items-center `, className);

  return (
    <div className={containerClass}>
      {label && (
        <label className="w-80 text-16 font-medium text-dark-6">
          {label}
          {required && <span className="text-red-6"> *</span>}
        </label>
      )}
      <div className="flex-1">
        <input
          className={`${textSize} ${disabled && 'cursor-not-allowed'} h-[44px] w-full appearance-none rounded-4 border-[1px] border-gray-3 bg-white px-12 font-light placeholder-gray-5 focus:border-dark-3 focus:outline-none`}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      </div>
      {InnerButton && <div className="ml-8 flex items-center">{InnerButton}</div>}
    </div>
  );
};

export default InputText;
