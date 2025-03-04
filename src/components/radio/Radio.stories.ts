import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import { fn } from '@storybook/test';

const meta: Meta<typeof Radio> = {
  title: 'Component/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Radio Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // docs 자동 생성
};
export default meta;

export const Base: StoryObj<typeof Radio> = {
  // Storybook의 default Radio Props
  args: {
    label: '옵션1',
    value: '옵션1',
    isChecked: true,
    size: 20,
    onClick: fn(),
    className: '',
  },
  // Storybook Docs 세팅
  argTypes: {
    className: {
      description: 'custom style by adding classname',
    },
  },
};
