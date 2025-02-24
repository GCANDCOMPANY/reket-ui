import Select from './Select';
import InputNumber from './InputNumber';
import { mergeStyle } from '../../utils/style';

interface Props {
  label?: string;
  required?: boolean;
  className?: string;
}

const InputMobile = ({ label, required, className }: Props): JSX.Element => {
  const containerStyle = mergeStyle('flex items-center', className);

  return (
    <div className={containerStyle}>
      {label && (
        <label className="w-80 shrink-0 text-16 font-medium text-dark-6">
          {label}
          {required && <span className="text-red-6"> *</span>}
        </label>
      )}
      <div className="flex w-full items-center">
        <Select defaultOption={MOBILE_OPTION[0]} options={MOBILE_OPTION} className="flex-1" />
        <span className="px-6 text-gray-5">-</span>
        <InputNumber maxLength={4} className="flex-1" />
        <span className="px-6 text-gray-5">-</span>
        <InputNumber maxLength={4} className="flex-1" />
      </div>
    </div>
  );
};

const MOBILE_OPTION = [
  { value: '010', label: '010' },
  { value: '016', label: '016' },
  { value: '017', label: '017' },
  { value: '018', label: '018' },
  { value: '019', label: '019' },
];

export default InputMobile;
