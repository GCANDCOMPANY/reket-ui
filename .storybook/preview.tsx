import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';
import { UIProvider } from '../src/UIProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <UIProvider>
        <Story />
      </UIProvider>
    ),
  ],
};

export default preview;
