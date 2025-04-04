import { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';
import { setIntroText } from '../../utils/storybookDos';

const meta: Meta<typeof TextArea> = {
  title: 'Component/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: setIntroText('TextArea'),
      },
    },
  },
  argTypes: {
    maxLength: {
      description: 'Limit the length of the input text.',
    },
    className: {
      description: 'Custom styles applied using Tailwind CSS classes.',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof TextArea> = {
  args: {},
};
