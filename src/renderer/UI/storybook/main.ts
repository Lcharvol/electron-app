import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, '../../'),
    };

    return config;
  },
};
export default config;
