module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    es6: true,
  },
  plugins: ['jest', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
};
