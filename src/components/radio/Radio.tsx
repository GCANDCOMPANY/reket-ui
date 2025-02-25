import { useContext } from 'react';
import { RiRadioButtonFill } from '@react-icons/all-files/ri/RiRadioButtonFill';
import { IoMdRadioButtonOff } from '@react-icons/all-files/io/IoMdRadioButtonOff';

import { colors } from '../../constants';
import { mergeStyle } from '../../utils/style';
import RadioGroupContext from './context';

interface Props {
  label?: string;
  value?: string | number;
  isChecked?: boolean;
  size?: number;
  onClick?: () => void;
  className?: Tailwind.ClassNames;
}

const Radio = ({ label, value, isChecked = false, size = 20, onClick, className }: Props) => {
  const { onRadioChange } = useContext(RadioGroupContext);
  const containerStyle = mergeStyle('flex items-center cursor-pointer py-8', className);

  return (
    <label
      className={containerStyle}
      onClick={() => {
        if (onClick) onClick();
        if (onRadioChange && !!value) onRadioChange(value);
      }}
    >
      {isChecked ? (
        <RiRadioButtonFill size={size} />
      ) : (
        <IoMdRadioButtonOff size={size} color={colors.gray[4]} />
      )}
      {!!label && <span className={`pl-4 pr-12 text-16 tracking-tight`}>{label}</span>}
    </label>
  );
};

export default Radio;
