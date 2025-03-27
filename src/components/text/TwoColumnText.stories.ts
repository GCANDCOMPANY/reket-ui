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
  tags: ['autodocs'], // automatically create docs
};
export default meta;

export const Base: StoryObj<typeof TwoColumnText> = {
  // default TwoColumnText Props
  args: {
    fontSize: 16,
    label: '이름',
    text: '홍길동',
    labelBold: true,
    textBold: false,
    textColored: false,
    className: '',
  },
  // custom docs setting
  argTypes: {
    fontSize: {
      description: 'set all of the font size',
    },
    className: {
      description: 'custom style by adding classname',
    },
  },
};
