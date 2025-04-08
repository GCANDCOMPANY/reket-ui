import React from 'react';
import { mergeStyle } from '../../../utils/style';

interface Props {
  text?: string;
  option?: 'filled' | 'outline';
  color?: 'dark' | 'purple' | 'red' | 'gray';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  display?: 'block' | 'inline';
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | Promise<void>;
  className?: Tailwind.ClassNames;
  children?: JSX.Element;
}

const Button = ({
  text = 'Button',
  option = 'outline',
  color = 'gray',
  size = 's',
  display = 'inline',
  onClick,
  className = '',
  children,
  ...props
}: Props): JSX.Element => {
  const classes = mergeStyle(
    `${BASE_STYLE} ${SIZE_STYLE[size]} ${DISPLAY_STYLE[display]} ${OPTION_STYLE[color][option]}`,
    className,
  );

  return (
    <button
      className={classes}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      {...props}
    >
      {!!children ? children : text}
    </button>
  );
};

export default Button;

const BASE_STYLE = 'cursor-pointer whitespace-nowrap tracking-tight rounded';

const SIZE_STYLE = {
  xs: 'px-[8px] h-[28px] text-[11px] font-normal',
  s: 'px-[12px] h-[36px] text-[12px] font-medium',
  m: 'px-[16px] h-[44px] text-[14px] font-medium',
  l: 'px-[16px] h-[48px] text-[14px] font-semibold',
  xl: 'px-[16px] h-[52px] text-[16px] font-bold',
};

const DISPLAY_STYLE = { block: 'w-full', inline: '' };

const OPTION_STYLE = {
  dark: {
    filled: 'text-white bg-dark-6 hover:bg-dark-8',
    outline: 'text-dark-6 border-[1px] border-solid border-dark-6 bg-white hover:bg-gray-0',
  },
  purple: {
    filled: 'text-white bg-violet-6 hover:bg-violet-9',
    outline: 'text-violet-6 border-[1px] border-solid border-violet-6 bg-white hover:bg-violet-0',
  },
  red: {
    filled: 'text-white bg-red-6 hover:bg-red-8',
    outline: 'text-red-6 border-[1px] border-solid border-red-6 bg-white hover:bg-red-0',
  },
  gray: {
    filled: 'text-white bg-gray-6 hover:bg-gray-8',
    outline: 'text-black border-[1px] border-solid border-gray-4 bg-white hover:bg-gray-0',
  },
};
