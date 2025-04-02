import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { setIntroText } from '../../utils/storybookDos';

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: setIntroText('Input'),
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

export const Base: StoryObj<typeof Input> = {
  args: {
    value: '',
    required: true,
    className: '',
    label: 'name',
    fontSize: 16,
    placeholder: '이름을 작성해주세요.',
    disabled: false,
  },
};
