import React, { ForwardedRef, forwardRef } from 'react';
import { mergeStyle } from 'src/utils/style';
import Icons from './Icons';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  className?: Tailwind.ClassNames;
  fontSize?: number;
  label?: string;
  icon?: IconType;
  InnerButton?: JSX.Element;
}

export type IconType = 'email' | 'text' | 'password';

const TextInput = forwardRef(
  (
    {
      required = false,
      className = '',
      label = '',
      fontSize = 16,
      icon,
      InnerButton,
      ...props
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const textStize = `text-${fontSize}`;
    const labelClass = mergeStyle(
      `relative flex items-center rounded border-1 border-gray-3 px-16 pb-12 ${
        label ? 'pt-20' : 'pt-12'
      } focus-within:border-gray-6`,
      className,
    );

    return (
      <label className={`${label ? 'pt-20' : 'pt-12'} focus-within:border-gray-6 ${labelClass}`}>
        {icon && (
          <div className="mr-12 h-24 w-36 border-r-1 border-r-gray-3 pr-12">
            <Icons type={icon} />
          </div>
        )}
        <div className="flex-1">
          {label && (
            <p className="absolute top-4 text-11 text-gray-6">
              {label}
              {required && <span className="text-red-6"> *</span>}
            </p>
          )}
          <input ref={ref} className={`${textStize} w-full outline-none`} {...props} />
        </div>
        {InnerButton && <div className="ml-8 flex items-center">{InnerButton}</div>}
      </label>
    );
  },
);

export default TextInput;
