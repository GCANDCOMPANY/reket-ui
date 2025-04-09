import type { Meta, StoryObj } from '@storybook/react';
import InputLabel from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof InputLabel> = {
  component: InputLabel,
  title: 'Component/InputLabel',
  parameters: {
    docs: {
      description: {
        component: generateDocsIntro('InputLabel'),
      },
    },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    label: 'name',
    required: true,
  },
};
