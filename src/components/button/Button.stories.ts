import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { generateDocsIntro } from '../../utils/storybook/docsHelper';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: generateDocsIntro('Button'),
      },
    },
  },
  argTypes: {
    text: {
      description: 'button text',
    },
    option: {
      control: 'inline-radio',
      description: 'handle base style of button',
      table: {
        type: {
          summary: 'filled | outline',
        },
      },
    },
    display: {
      control: 'inline-radio',
      description: 'handle display style of button',
      table: {
        type: {
          summary: 'block | inline',
        },
      },
    },
    color: {
      control: 'inline-radio',
      description: 'handle color of button',
      table: {
        type: {
          summary: 'dark | gray | red | purple',
        },
      },
    },
    size: {
      control: 'inline-radio',
      description: 'button size',
      table: {
        type: {
          summary: 'xs | s | m | l | xl',
        },
      },
    },
    className: {
      description: 'custom style by adding Tailwind CSS className',
    },
    children: {
      description: 'add custom element inside the button element',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof Button> = {
  args: {
    text: 'Button',
    option: 'outline',
    display: 'inline',
    color: 'gray',
  },
};
