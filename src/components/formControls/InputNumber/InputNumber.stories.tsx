import type { Meta, StoryObj } from '@storybook/react';
import InputNumber from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';
// Update the import path based on this component's location

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
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {},
};
