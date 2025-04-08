import type { Meta, StoryObj } from '@storybook/react';
import Heading from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Component/Heading',
  parameters: {
    docs: {
      description: {
        component: generateDocsIntro('Heading', {
          notes: 'Use `level` prop to change semantic heading tag (h1 ~ h6).',
        }),
      },
    },
  },
  argTypes: {
    level: {
      description: 'Specifies the semantic level of the heading element.',
      table: { type: { summary: '1 | 2 | 3 | 4| 5 | 6' } },
    },
    className: {
      description: 'Custom styles applied using Tailwind CSS classes.',
    },
    children: {
      description: 'Custom element or content inside the Heading.',
      table: { type: { summary: 'string | JSX.Element' } },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: {
    level: 1,
    children: 'Title',
    className: '',
  },
};
export const Heading2: Story = {
  args: {
    level: 2,
    children: 'Title',
    className: '',
  },
};
export const Heading3: Story = {
  args: {
    level: 3,
    children: 'Title',
    className: '',
  },
};
export const Heading4: Story = {
  args: {
    level: 4,
    children: 'Title',
    className: '',
  },
};
export const Heading5: Story = {
  args: {
    level: 5,
    children: 'Title',
    className: '',
  },
};
export const Heading6: Story = {
  args: {
    level: 6,
    children: 'Title',
    className: '',
  },
};
