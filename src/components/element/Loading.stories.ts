import { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';
import { setIntroText } from '../../utils/storybookDos';

const meta: Meta<typeof Loading> = {
  title: 'Component/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: setIntroText('Loading'),
      },
    },
  },
  argTypes: {
    className: {
      description: 'custom style by adding Tailwind CSS className',
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
