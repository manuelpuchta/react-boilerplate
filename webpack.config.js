const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';
const isProduction = nodeEnv === 'production';

const mode = isDevelopment ? 'development' : 'production';
let output = {
  filename: '[name].[hash].js',
  path: path.resolve(__dirname, 'dist'),
};
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new HtmlWebpackPlugin({
    title: 'React boilerplate',
    chunks: ['main'],
    meta: { viewport: 'width=device-width, initial-scale=1' },
  }),
];

if (isDevelopment) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (isProduction) {
  plugins.push(new CleanWebpackPlugin({ verbose: true }));
  output = {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
  };
}

module.exports = {
  devtool: isDevelopment ? 'cheap-module-inline-source-map' : 'source-map',
  mode: mode,
  entry: { main: ['@babel/polyfill', './src/index.js'] },
  output: output,
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: isDevelopment,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};
