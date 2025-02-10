import { extendTailwindMerge } from 'tailwind-merge';

export const mergeStyle = extendTailwindMerge({
  prefix: 'text-',
  extend: {},
});

export default { mergeStyle };
