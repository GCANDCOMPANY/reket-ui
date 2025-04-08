import { mergeStyle } from '../../../utils/style';

interface Props {
  fontSize?: number;
  label?: string;
  text?: string;
  labelBold?: boolean;
  textBold?: boolean;
  textColored?: boolean;
  className?: Tailwind.ClassNames;
}

const TwoColumnText = ({
  fontSize = 16,
  label,
  text,
  labelBold = false,
  textBold = false,
  textColored = false,
  className,
}: Props): JSX.Element => {
  const containerStyle = mergeStyle(`flex items-center justify-between py-5`, className);
  const textSize = `text-${fontSize}`;

  return (
    <div className={containerStyle}>
      <p
        className={`tracking-tight ${labelBold ? 'font-semibold' : 'font-normal'} ${textSize} mr-16 whitespace-nowrap`}
      >
        {label}
      </p>
      <p
        className={`${textBold ? 'font-semibold' : 'font-normal'} ${textColored ? 'text-violet-8' : 'text-dark-6'} ${textSize} break-all text-right leading-5 tracking-tight`}
      >
        {text}
      </p>
    </div>
  );
};

export default TwoColumnText;
