import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters';
import { mergeStyle } from '../../utils/style';

interface Props extends React.ComponentProps<'div'> {
  isLoading?: boolean;
  overlay?: boolean;
  className?: React.SVGAttributes<SVGElement>['className'];
  size?: number;
}

const Loading = ({
  isLoading = true,
  overlay,
  className = '',
  size = 42,
  ...props
}: Props): JSX.Element | null => {
  const overlayStyle = overlay
    ? 'fixed left-0 top-0 z-20 h-screen w-screen bg-black bg-opacity-10 flex justify-center items-center'
    : '';
  const spinnerClass = mergeStyle('animate-spin text-gray-6', className);

  return isLoading ? (
    <div className={overlayStyle} {...props}>
      <AiOutlineLoading3Quarters size={size} className={spinnerClass} color="" />
    </div>
  ) : null;
};

export default Loading;
