const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // It moves all the required *.css modules in entry chunks into a separate CSS file.

const nodeEnv = process.env.NODE_ENV || 'development';
const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: nodeEnv === 'development'
});

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  extractSass
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.scss$/,
    use: extractSass.extract({
      use: [{
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }],
      // use style-loader in development
      fallback: 'style-loader' // creates style nodes from JS strings
    })
  }
];

if (nodeEnv === 'development') {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  );
}

if (nodeEnv === 'production') {

}

const config = {
  // Here the application starts executing
  // and webpack starts bundling
  entry: ['babel-polyfill', './src/app/index.js'],
  // options related to how webpack emits results
  output: {
    // the filename template for entry chunks
    filename: 'bundle.js',
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // rules for modules (configure loaders, parser options, etc.)
    rules: rules
  },
  // adding plugins to our configuration
  plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};

module.exports = config;
