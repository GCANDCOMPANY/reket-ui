import React from 'react';
import { mergeStyle } from 'src/utils/style';

interface LabeledTextProps {
  label: string;
  content?: string;
  wrapperClass?: React.ComponentProps<'div'>['className'];
  labelClass?: React.ComponentProps<'div'>['className'];
  contentClass?: React.ComponentProps<'div'>['className'];
}

const LabeledText = ({
  label = '',
  content = '',
  wrapperClass = '',
  labelClass = '',
  contentClass = '',
}: LabeledTextProps): JSX.Element => {
  return (
    <div className={mergeStyle(`py-4 ${wrapperClass}`)}>
      <p className={mergeStyle(`text-12 font-bold leading-3 text-gray-7 ${labelClass}`)}>{label}</p>
      {content && <p className={mergeStyle(`text-14 ${contentClass}`)}>{content}</p>}
    </div>
  );
};

export default LabeledText;
