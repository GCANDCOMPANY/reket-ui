import { Meta, StoryObj } from '@storybook/react';
import Empty from './Empty';
import { setIntroText } from '../../utils/storybookDos';

const meta: Meta<typeof Empty> = {
  title: 'Component/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: setIntroText('Empty'),
      },
    },
  },
  argTypes: {
    size: {
      description: 'handle size of icon',
    },
    className: {
      description: 'custom style by adding Tailwind CSS className',
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
