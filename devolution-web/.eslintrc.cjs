/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'vue/require-default-prop': 0,
    'vue/html-indent': ['error', 2],
    'vue/singleline-html-element-content-newline': 0,
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
