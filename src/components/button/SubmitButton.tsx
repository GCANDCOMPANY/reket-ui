import React, { ButtonHTMLAttributes } from 'react';
import { mergeStyle } from 'src/utils/style';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const SubmitButton = ({ children, className, ...props }: SubmitButtonProps) => {
  const classes = mergeStyle(
    'text-16 rounded bg-black px-12 py-8 font-semibold text-white shadow',
    className,
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default SubmitButton;
