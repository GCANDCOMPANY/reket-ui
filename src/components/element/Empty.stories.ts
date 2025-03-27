import { Meta, StoryObj } from '@storybook/react';
import Empty from './Empty';

const meta: Meta<typeof Empty> = {
  title: 'Component/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Empty Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // automatically create docs
};
export default meta;

export const Base: StoryObj<typeof Empty> = {
  // default Empty Props
  args: {
    size: 52,
    message: '페이지가 비어있습니다.',
    className: '',
  },
  // custom docs setting
  argTypes: {
    size: {
      description: 'handle size of icon',
    },
    className: {
      description: 'custom style by adding Tailwind CSS className',
    },
  },
};
