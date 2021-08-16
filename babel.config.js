module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    development: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        'react-refresh/babel',
        'styled-components',
      ],
    },
    production: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        'styled-components',
      ],
    },
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        'react-refresh/babel',
        'styled-components',
      ],
    },
  },
};
