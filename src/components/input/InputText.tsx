import { forwardRef, ForwardedRef } from 'react';
import { mergeStyle } from '../../utils/style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  className?: Tailwind.ClassNames;
  fontSize?: number;
  label?: string;
  InnerButton?: JSX.Element;
}

const InputText = forwardRef(
  (
    { required = false, className = '', label = '', fontSize = 16, InnerButton, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const textSize = `text-${fontSize}`;
    const labelClass = mergeStyle(`flex items-center `, className);

    return (
      <label className={labelClass}>
        {label && (
          <p className="w-80 text-16 font-medium text-dark-6">
            {label}
            {required && <span className="text-red-6"> *</span>}
          </p>
        )}
        <div className="flex-1">
          <input
            ref={ref}
            className={`${textSize} h-[44px] w-full rounded-4 border-1 border-gray-4 px-12 font-light placeholder-gray-5 focus:border-dark-6 focus:outline-none`}
            {...props}
          />
        </div>
        {InnerButton && <div className="ml-8 flex items-center">{InnerButton}</div>}
      </label>
    );
  },
);

export default InputText;
