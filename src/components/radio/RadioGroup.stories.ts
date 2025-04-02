import { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';
import { setIntroText } from '../../utils/storybookDos';

const meta: Meta<typeof RadioGroup> = {
  title: 'Component/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: setIntroText('RadioGroup'),
      },
    },
  },
  argTypes: {
    isVertical: {
      description: 'layout of RadioGroup',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof RadioGroup> = {
  args: {
    value: '옵션1',
    options: [
      { value: '옵션1', label: '옵션1' },
      { value: '옵션2', label: '옵션2' },
      { value: '옵션3', label: '옵션3' },
    ],
    isVertical: true,
  },
};
