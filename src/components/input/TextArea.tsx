import { useState } from 'react';
import { mergeStyle } from '../../utils/style';

interface Props {
  maxLength?: number;
  placeholder?: string;
  className?: Tailwind.ClassNames;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const TextArea = ({
  maxLength,
  placeholder = '내용을 작성해주세요.',
  className,
  disabled,
  onChange,
  ...props
}: Props): JSX.Element => {
  const [textLength, setTextLength] = useState(0);
  const containerStyle = mergeStyle('flex-1', className);

  return (
    <div className={containerStyle}>
      <textarea
        disabled={disabled}
        maxLength={maxLength}
        className="flex min-h-[44px] w-full items-center rounded border-[1px] border-solid border-gray-3 p-12 caret-dark-6 placeholder:text-gray-5 focus:border-dark-3 focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => {
          setTextLength(e.target.value?.length);

          if (onChange) onChange(e.target.value);
        }}
        {...props}
      />
      {!!maxLength && (
        <p
          className={`mt-4 text-right text-14 ${textLength === maxLength ? 'text-dark-6' : 'text-gray-6'}`}
        >
          {textLength} / {maxLength}
        </p>
      )}
    </div>
  );
};

export default TextArea;
