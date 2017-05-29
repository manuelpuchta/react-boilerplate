const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // It moves all the required *.css modules in entry chunks into a separate CSS file.
const autoprefixer = require('autoprefixer');
const autoprefixerBrowserslist = 'last 2 versions';
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';
const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  extractSass,
  new CleanWebpackPlugin('dist'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  })
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  }
];

if (isDevelopment) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  );

  rules.push(
    {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader', // used for autoprefixing
          options: {
            sourceMap: true,
            plugins: () => {
              return [autoprefixer(autoprefixerBrowserslist)]
            }
          }
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            sourceMap: true
          }
        }]
      })
    }
  );
} else {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  );

  rules.push(
    {
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => {
              return [autoprefixer(autoprefixerBrowserslist)]
            }
          }
        }, {
          loader: 'sass-loader',
          options: {
            outputStyle: 'compressed'
          }
        }]
      })
    }
  );
}

const config = {
  // inlines SourceMap into original file
  devtool: isDevelopment ? 'inline-source-map' : false,
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
    port: 3000
  }
};

module.exports = config;
