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
  tags: ['autodocs'], // docs 자동 생성
};
export default meta;

export const Base: StoryObj<typeof Empty> = {
  // Storybook의 default Empty Props
  args: {
    size: 52,
    message: '페이지가 비어있습니다.',
    className: '',
  },
  // Storybook Docs 세팅
  argTypes: {
    className: {
      description: 'custom style by adding classname',
    },
  },
};
