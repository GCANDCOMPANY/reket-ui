import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './TextArea';
import { generateDocsIntro } from '../../utils/storybook/docsHelper';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Component/TextArea',
  parameters: {
    docs: {
      description: {
        component: generateDocsIntro('TextArea'),
      },
    },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {},
};
