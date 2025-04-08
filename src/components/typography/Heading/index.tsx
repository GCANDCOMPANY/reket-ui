import { mergeStyle } from '../../../utils/style';

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: JSX.Element | string;
  className?: string;
}

const Heading = ({ level = 1, children, className }: Props) => {
  const styles = mergeStyle(FONT_SIZE[level], 'tracking-tight', className);
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={styles}>{children}</Tag>;
};

export default Heading;

const FONT_SIZE = {
  1: 'text-3xl font-bold',
  2: 'text-2xl font-semibold',
  3: 'text-xl font-semibold',
  4: 'text-lg font-medium',
  5: 'text-base',
  6: 'text-sm',
};
