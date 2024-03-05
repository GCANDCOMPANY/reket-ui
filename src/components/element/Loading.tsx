import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { mergeStyle } from 'src/utils/style';

interface LoadingProps extends React.ComponentProps<'div'> {
  isLoading?: boolean;
  overlay?: boolean;
  className?: React.SVGAttributes<SVGElement>['className'];
  size?: number;
}

const Loading = ({
  isLoading = true,
  overlay,
  className = '',
  size = 54,
  ...props
}: LoadingProps): JSX.Element | null => {
  const overlayStyle = overlay
    ? 'fixed left-0 top-0 z-20 h-screen w-screen bg-black bg-opacity-10 flex justify-center items-center'
    : '';
  const spinnerClass = mergeStyle('animate-spin text-secondary', className);

  return isLoading ? (
    <div className={overlayStyle} {...props}>
      <AiOutlineLoading size={size} className={spinnerClass} />
    </div>
  ) : null;
};

export default Loading;
