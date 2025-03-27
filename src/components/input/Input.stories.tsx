import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { Button } from '../button';

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Input Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // automatically create docs
};
export default meta;

export const Base: StoryObj<typeof Input> = {
  // default Input Props
  args: {
    value: '',
    required: true,
    className: '',
    label: 'name',
    fontSize: 16,
    placeholder: '이름을 작성해주세요.',
    disabled: false,
  },
  // custom docs setting
  argTypes: {
    className: {
      description: 'custom style by adding Tailwind CSS className',
    },
  },
};
