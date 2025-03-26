import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Button Component',
    docs: {
      description: {
        component: '@reket/ui',
      },
    },
  },
  tags: ['autodocs'], // docs 자동 생성
};
export default meta;

export const Base: StoryObj<typeof Button> = {
  // Storybook의 default Button Props
  args: {
    text: 'Button',
    option: 'outline',
    display: 'inline',
    color: 'gray',
    onClick: fn(),
  },
  // Storybook Docs 세팅
  argTypes: {
    text: {
      description: 'button text',
    },
    option: {
      control: 'inline-radio',
      description: 'button style',
      table: {
        type: {
          summary: `'filled' | 'outline'`,
        },
      },
    },
    display: {
      control: 'inline-radio',
      description: 'button display style',
      table: {
        type: {
          summary: 'block | inline',
        },
      },
    },
    color: {
      control: 'inline-radio',
      description: 'button color',
      table: {
        type: {
          summary: `'dark' | 'gray' | 'red' | 'purple'`,
        },
      },
    },
    size: {
      control: 'inline-radio',
      description: 'button size',
      table: {
        type: {
          summary: `'xs' | 's' | 'm' | 'l' | 'xl'`,
        },
      },
    },
    className: {
      description: 'custom style by adding Tailwind CSS className',
    },
    children: {
      description: 'add custom element inside button element',
    },
  },
};
