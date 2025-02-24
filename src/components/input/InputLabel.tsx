import { mergeStyle } from '../../utils/style';

interface Props {
  label?: string;
  required?: boolean;
  className?: string;
}

const InputLabel = ({ label, required, className }: Props): JSX.Element => {
  const style = mergeStyle('w-80 text-16 font-medium text-dark-6', className);

  return (
    <label className={style}>
      {label}
      {required && <span className="text-red-6"> *</span>}
    </label>
  );
};

export default InputLabel;
