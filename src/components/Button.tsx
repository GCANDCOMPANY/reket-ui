'use client';

import React from 'react';
// import { mergeStyle } from '../utils/style.js';

interface Props {
  text?: string;
  option?: 'filled' | 'outline';
  color?: 'dark' | 'purple' | 'red' | 'gray';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  width?: 'block' | 'inline';
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  // className?: string;
}

const Button = ({
  text = '',
  option = 'filled',
  color = 'dark',
  size = 's',
  width = 'inline',
  onClick,
  // className = '', // for custom className
}: Props): JSX.Element => {
  // const classes = mergeStyle(
  //   `${BASE_STYLE} ${SIZE_STYLE[size]} ${WIDTH_STYLE[width]} ${OPTION_STYLE[color][option]}`,
  //   className,
  // );

  return (
    <button
      // className={classes}
      className={`${BASE_STYLE} ${SIZE_STYLE[size]} ${WIDTH_STYLE[width]} ${OPTION_STYLE[color][option]}`}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      {text}
    </button>
  );
};

export default Button;

const BASE_STYLE = 'cursor-pointer whitespace-nowrap tracking-tight rounded';
const SIZE_STYLE = {
  xs: 'px-[8px] h-[28px] text-[11px] font-normal',
  s: 'px-[8px] h-[32px] text-[12px] font-normal',
  m: 'px-[16px] h-[36px] text-[14px] font-medium',
  l: 'px-[16px] h-[44px] text-[16px] font-medium',
  xl: 'px-[16px] h-[48px] text-[18px] font-medium',
};
const WIDTH_STYLE = {
  block: 'w-full',
  inline: '',
};
const OPTION_STYLE = {
  dark: {
    filled: 'text-white bg-dark-6 hover:bg-dark-8',
    outline: 'text-dark-6 border-[1px] border-dark-6 bg-white hover:bg-dark-1',
  },
  purple: {
    filled: 'text-white bg-violet-6 hover:bg-violet-9',
    outline: 'text-violet-6 border-[1px] border-violet-6 bg-white hover:bg-violet-1',
  },
  red: {
    filled: 'text-white bg-red-6 hover:bg-red-8',
    outline: 'text-red-6 border-[1px] border-red-6 bg-white hover:bg-red-1',
  },
  gray: {
    filled: 'text-white bg-gray-6 hover:bg-gray-8',
    outline: 'text-black border-[1px] border-gray-6 bg-white hover:bg-gray-1',
  },
};
