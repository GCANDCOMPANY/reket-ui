import { Meta, StoryObj } from '@storybook/react';
import Loading from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof Loading> = {
  title: 'Component/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: generateDocsIntro('Loading'),
      },
    },
  },
  argTypes: {
    className: {
      description: 'Custom styles applied using Tailwind CSS classes.',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof Loading> = {
  args: {
    isLoading: true,
    isFixed: true,
    overlay: false,
    className: '',
    size: 32,
  },
};
