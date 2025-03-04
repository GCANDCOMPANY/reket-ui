import { Meta, StoryObj } from '@storybook/react';
import LabeledText from './LabeledText';

const meta: Meta<typeof LabeledText> = {
  title: 'Component/LabeledText',
  component: LabeledText,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'LabeledText Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // docs 자동 생성
};
export default meta;

export const Base: StoryObj<typeof LabeledText> = {
  // Storybook의 default LabeledText Props
  args: {
    fontSize: 16,
    label: '이름',
    text: '홍길동',
    labelBold: true,
    textBold: false,
    textColored: false,
    className: '',
    paddingVertical: 5,
  },
  // Storybook Docs 세팅
  argTypes: {
    className: {
      description: 'custom style by adding classname',
    },
  },
};
