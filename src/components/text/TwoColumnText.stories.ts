import { Meta, StoryObj } from '@storybook/react';
import TwoColumnText from './TwoColumnText';

const meta: Meta<typeof TwoColumnText> = {
  title: 'Component/TwoColumnText',
  component: TwoColumnText,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'TwoColumnText Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // docs 자동 생성
};
export default meta;

export const Base: StoryObj<typeof TwoColumnText> = {
  // Storybook의 default TwoColumnText Props
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
