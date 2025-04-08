import { Meta, StoryObj } from '@storybook/react';
import Empty from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof Empty> = {
  title: 'Component/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: generateDocsIntro('Empty'),
      },
    },
  },
  argTypes: {
    size: {
      description: 'handle size of icon',
    },
    className: {
      description: 'Custom styles applied using Tailwind CSS classes.',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof Empty> = {
  args: {
    size: 52,
    message: '페이지가 비어있습니다.',
    className: '',
  },
};
