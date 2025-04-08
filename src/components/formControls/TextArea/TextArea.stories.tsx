import type { Meta, StoryObj } from '@storybook/react';

import TextArea from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

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
  argTypes: {
    maxLength: {
      description: '',
    },
    className: {
      description: 'Custom styles applied using Tailwind CSS classes.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    maxLength: 20,
    className: '',
  },
};
