import { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Component/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Loading Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // automatically create docs
};
export default meta;

export const Base: StoryObj<typeof Loading> = {
  // default Loading Props
  args: {
    isLoading: true,
    isFixed: true,
    overlay: false,
    className: '',
    size: 32,
  },
  // custom docs setting
  argTypes: {
    className: {
      description: 'custom style by adding Tailwind CSS className',
    },
  },
};
