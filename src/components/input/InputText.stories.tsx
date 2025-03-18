import { Meta, StoryObj } from '@storybook/react';
import InputText from './InputText';
import { Button } from '../button';

const meta: Meta<typeof InputText> = {
  title: 'Component/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'InputText Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // docs 자동 생성
};
export default meta;

export const Base: StoryObj<typeof InputText> = {
  // Storybook의 default InputText Props
  args: {
    value: '',
    required: true,
    className: '',
    label: 'name',
    fontSize: 16,
    placeholder: '이름을 작성해주세요.',
    disabled: false,
  },
  // Storybook Docs 세팅
  argTypes: {
    className: {
      description: 'custom style by adding classname',
    },
  },
};
