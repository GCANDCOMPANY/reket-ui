import { useEffect } from 'react';
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters';
import { mergeStyle } from '../../../utils/style';

interface Props extends React.ComponentProps<'div'> {
  isLoading?: boolean;
  isFixed?: boolean;
  overlay?: boolean;
  className?: React.SVGAttributes<SVGElement>['className'];
  size?: number;
}

const Loading = ({
  isLoading = true,
  isFixed = true,
  overlay,
  className = '',
  size = 32,
  ...props
}: Props): JSX.Element | null => {
  const overlayStyle = overlay
    ? 'fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-10 flex justify-center items-center'
    : '';
  const spinnerClass = mergeStyle('animate-spin text-dark-5', className);

  useEffect(() => {
    document.body.style.overflow = isLoading && isFixed ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading, isFixed]);

  return isLoading ? (
    <div className={overlayStyle} {...props}>
      <AiOutlineLoading3Quarters size={size} className={spinnerClass} />
    </div>
  ) : null;
};

export default Loading;
