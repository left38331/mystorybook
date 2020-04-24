module.exports = {
  stories: ['../stories/**/*.stories.js', '../src/components/**/*.stories.js'],
  addons: [
      '@storybook/preset-create-react-app',
      '@storybook/addon-actions',
      '@storybook/addon-links',
      '@storybook/addon-knobs/register',
      './.storybook/design-addon/register.js']
};
