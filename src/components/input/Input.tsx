import React from 'react';
import { mergeStyle } from '../../utils/style';
import InputLabel from './InputLabel';

interface Props {
  value?: string | number;
  required?: boolean;
  className?: Tailwind.ClassNames;
  fontSize?: number;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  InnerButton?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  required = false,
  className = '',
  label = '',
  fontSize = 16,
  InnerButton,
  placeholder = '입력란을 작성해주세요.',
  disabled = false,
  onChange,
  ...props
}: Props): JSX.Element => {
  const textSize = `text-${fontSize}`;
  const containerClass = mergeStyle(`flex items-center `, className);

  return (
    <div className={containerClass}>
      {!!label && <InputLabel label={label} required={required} />}
      <div className="flex-1">
        <input
          value={value}
          className={`${textSize} ${disabled && 'cursor-not-allowed'} h-[44px] w-full appearance-none rounded border-[1px] border-gray-3 bg-white px-12 font-light placeholder-gray-5 caret-dark-6 focus:border-dark-3 focus:outline-none`}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            onChange?.(e);
          }}
          {...props}
        />
      </div>
      {InnerButton && <div className="ml-8 flex items-center">{InnerButton}</div>}
    </div>
  );
};

export default Input;
