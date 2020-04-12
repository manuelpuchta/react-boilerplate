module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    development: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-proposal-class-properties',
        'styled-components',
      ],
    },
    production: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-proposal-class-properties',
        'styled-components',
      ],
    },
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-proposal-class-properties',
        'styled-components',
      ],
    },
  },
};
