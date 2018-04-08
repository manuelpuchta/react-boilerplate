const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html'
  })
];

if (!isDevelopment) {
  plugins.push(
    new CleanWebpackPlugin('build')
  );
}

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:4].js',
    path: isDevelopment ? path.resolve(__dirname, 'public') : path.resolve(__dirname, 'build')
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', ['env', {
            'targets': {
              'browsers': ['last 2 versions']
            }
          }]],
          plugins: [],
          cacheDirectory: true
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchOptions: {
      ignored: /node_modules/,
    },
    compress: true,
    port: 3000
  }
};
