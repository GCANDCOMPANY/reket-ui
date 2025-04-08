import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Component/Checkbox',
  parameters: {
    docs: {
      description: {
        component: generateDocsIntro('Checkbox'),
      },
    },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};
