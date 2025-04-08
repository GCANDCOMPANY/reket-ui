import { Meta, StoryObj } from '@storybook/react';
import TwoColumnText from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof TwoColumnText> = {
  title: 'Component/TwoColumnText',
  component: TwoColumnText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: generateDocsIntro('TwoColumnText'),
      },
    },
  },
  argTypes: {
    fontSize: {
      description: 'set all of the font size',
    },
    className: {
      description: 'custom style by adding Tailwind CSS className',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof TwoColumnText> = {
  args: {
    fontSize: 16,
    label: '이름',
    text: '홍길동',
    labelBold: true,
    textBold: false,
    textColored: false,
    className: '',
  },
};
