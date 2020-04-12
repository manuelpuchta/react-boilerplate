module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    es6: true,
  },
  plugins: ['jest', 'prettier', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      jsx: true,
    },
  },
  rules: {
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'prettier/prettier': 'error',
    strict: ['error', 'global'],
    'no-console': 'error',
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
};
