import { IoIosInformationCircleOutline } from '@react-icons/all-files/io/IoIosInformationCircleOutline';
import { mergeStyle } from '../../utils/style';

interface Props {
  size?: number;
  message?: string;
  className?: Tailwind.ClassNames;
}

const Empty = ({ size = 52, message = '', className, ...props }: Props): JSX.Element => {
  const classes = mergeStyle('min-h-320 flex-center flex-col', className);

  return (
    <div className={classes} {...props}>
      <IoIosInformationCircleOutline size={size} color="#e1e1e1" />
      {message && <p className="mt-16 select-none text-16 tracking-tight text-gray-5">{message}</p>}
    </div>
  );
};
export default Empty;
