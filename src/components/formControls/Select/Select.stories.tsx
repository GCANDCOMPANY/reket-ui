import { Meta, StoryObj } from '@storybook/react';
import Select from '.';
import { generateDocsIntro } from '../../../utils/storybook/docsHelper';

const meta: Meta<typeof Select> = {
  title: 'Component/Select',
  component: Select,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 220,
      },
      description: {
        component: generateDocsIntro('Select'),
      },
    },
  },
  argTypes: {
    placeholder: {
      description: `Text displayed when the 'defaultOption' prop is not set.`,
    },
    className: {
      description: 'Custom styles applied using Tailwind CSS classes.',
    },
    options: {
      description: 'An array of items to display in the select dropdown.',
    },
    defaultOption: {
      description: 'Displayed in place of the placeholder when set.',
    },
    onChange: {
      description: 'Callback function triggered when an option is selected.',
    },
  },
};
export default meta;

export const Base: StoryObj<typeof Select> = {
  args: {
    placeholder: 'select',
    options: [
      {
        value: 'apple',
        label: 'apple',
      },
      {
        value: 'watermelon',
        label: 'watermelon',
      },
      {
        value: 'orange',
        label: 'orange',
      },
    ],
    className: '',
  },
};
