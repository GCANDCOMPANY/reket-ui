import React from 'react';
import { mergeStyle } from 'src/utils/style';

interface TooltipProps extends React.ComponentProps<'div'> {
  children: JSX.Element | string | number;
  message?: string;
}

const Tooltip = ({ children, message = 'message', className }: TooltipProps): JSX.Element => {
  const classes = mergeStyle(
    "invisible absolute z-10 -translate-x-8 translate-y-[calc(-100%-8px)] rounded-6 bg-white px-12 py-6 shadow-lg after:absolute after:bottom-[1px] after:left-[10px] after:h-16 after:w-12 after:translate-y-full after:border-6 after:border-t-8 after:border-transparent after:border-t-white after:drop-shadow-bottom after:content-[''] group-hover:visible",
    className,
  );

  return (
    <div className="group relative">
      <div className={classes}>
        <p className="whitespace-nowrap text-14 text-gray-7">{message}</p>
      </div>
      <div className="cursor-pointer">{children}</div>
    </div>
  );
};

export default Tooltip;
