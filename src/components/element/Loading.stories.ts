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
  tags: ['autodocs'], // docs 자동 생성
};
export default meta;

export const Base: StoryObj<typeof Loading> = {
  // Storybook의 default Loading Props
  args: {
    isLoading: true,
    isFixed: true,
    overlay: false,
    className: '',
    size: 32,
  },
  // Storybook Docs 세팅
  argTypes: {
    className: {
      description: 'custom style by adding classname',
    },
  },
};
