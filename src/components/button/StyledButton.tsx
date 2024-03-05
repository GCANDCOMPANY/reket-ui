import React, { ButtonHTMLAttributes } from 'react';
import { mergeStyle } from 'src/utils/style';

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: (JSX.Element | string | number) | (JSX.Element | string | number)[];
}

const StyledButton = ({ children, className, ...props }: StyledButtonProps): JSX.Element => {
  const classes = mergeStyle(className, 'rounded px-12 py-8 hover:bg-black hover:bg-opacity-5');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default StyledButton;
