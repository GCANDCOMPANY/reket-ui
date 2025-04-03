import { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';
import { setIntroText } from '../../utils/storybookDos';

const meta: Meta<typeof TextArea> = {
  title: 'Component/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: setIntroText('TextArea'),
      },
    },
  },
  argTypes: {
    className: {
      description: 'custom style by adding Tailwind CSS className',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof TextArea> = {
  args: {},
};
