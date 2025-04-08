import { Meta, StoryObj } from '@storybook/react';
import RadioButtonGroup from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof RadioButtonGroup> = {
  title: 'Component/RadioButtonGroup',
  component: RadioButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: generateDocsIntro('RadioButtonGroup'),
      },
    },
  },
  argTypes: {
    isVertical: {
      description: 'layout of RadioButtonGroup',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof RadioButtonGroup> = {
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
