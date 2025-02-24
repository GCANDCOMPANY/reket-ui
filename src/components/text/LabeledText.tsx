import { mergeStyle } from '../../utils/style';

interface Props {
  fontSize?: number;
  label?: string;
  text?: string;
  labelBold?: boolean;
  textBold?: boolean;
  textColored?: boolean;
  className?: Tailwind.ClassNames;
}

const LabeledText = ({
  fontSize = 16,
  label,
  text,
  labelBold,
  textBold,
  textColored,
  className,
}: Props): JSX.Element => {
  const containerStyle = mergeStyle('flex justify-between', className);
  const textSize = `text-${fontSize}`;

  return (
    <div className={containerStyle}>
      <p className={`racking-tight ${labelBold && 'font-semibold'} ${textSize}`}>{label}</p>
      <p
        className={`${textBold && 'font-semibold'} ${textColored && 'text-violet-8'} ${textSize} text-16 tracking-tight`}
      >
        {text}
      </p>
    </div>
  );
};

export default LabeledText;
