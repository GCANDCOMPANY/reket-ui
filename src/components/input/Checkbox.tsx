import { IoCheckbox } from '@react-icons/all-files/io5/IoCheckbox';
import { colors } from '../../constants';
import { mergeStyle } from '../../utils/style';

interface Props {
  label?: string;
  isChecked?: boolean;
  size?: number;
  onClick?: () => void;
  className?: Tailwind.ClassNames;
}

const Checkbox = ({ label, isChecked = false, size = 18, onClick, className }: Props) => {
  const containerStyle = mergeStyle('flex items-center cursor-pointer', className);

  return (
    <button className={containerStyle} onClick={onClick}>
      <IoCheckbox size={size} color={isChecked ? 'black' : colors.gray[4]} />
      {!!label && (
        <p className={`ml-4 leading-4 tracking-tight ${isChecked ? 'text-dark-6' : 'text-gray-6'}`}>
          {label}
        </p>
      )}
    </button>
  );
};

export default Checkbox;
