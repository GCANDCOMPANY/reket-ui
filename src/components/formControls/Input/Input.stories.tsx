import { Meta, StoryObj } from '@storybook/react';
import Input from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: generateDocsIntro('Input'),
      },
    },
  },
  argTypes: {
    className: {
      description: 'Custom styles applied using Tailwind CSS classes.',
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
