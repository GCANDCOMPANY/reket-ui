import { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Component/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'RadioGroup Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // docs 자동 생성
};
export default meta;

export const Base: StoryObj<typeof RadioGroup> = {
  // Storybook의 default RadioGroup Props
  args: {
    value: '옵션1',
    options: [
      { value: '옵션1', label: '옵션1' },
      { value: '옵션2', label: '옵션2' },
      { value: '옵션3', label: '옵션3' },
    ],
    isVertical: true,
  },
  // Storybook Docs 세팅
  argTypes: {
    isVertical: {
      description: 'layout of RadioGroup',
    },
  },
};
