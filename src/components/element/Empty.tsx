import React from 'react';
import { LuInbox } from 'react-icons/lu';
import { mergeStyle } from 'src/utils/style';

interface EmptyProps extends React.ComponentProps<'div'> {
  size?: number;
  message?: string;
}

const Empty = ({ size = 64, message = '', className, ...props }: EmptyProps): JSX.Element => {
  const classes = mergeStyle('min-h-320 flex-center flex-col', className);

  return (
    <div className={classes} {...props}>
      <LuInbox size={size} color="#e1e1e1" />
      {message && <p className="mt-16 select-none text-14 text-gray-5">{message}</p>}
    </div>
  );
};

export default Empty;
