import type { Meta, StoryObj } from '@storybook/react';
import InputNumber from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  title: 'Component/InputNumber',
  parameters: {
    docs: {
      description: {
        component: generateDocsIntro('InputNumber'),
      },
    },
  },
  argTypes: {
    placeholder: {
      description: `Text displayed when the 'value' prop is not set.`,
    },
    className: {
      description: 'Custom styles applied using Tailwind CSS classes.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {
    label: 'number',
    required: true,
    className: '',
    placeholder: '0',
    maxLength: 5,
  },
};
