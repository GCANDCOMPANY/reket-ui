import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/Intro.stories.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: true,
      },
    },
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite', // storybook이 webpack 기반임에 따라, vite builder 설치 및 설정
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
