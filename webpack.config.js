const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const autoprefixerBrowserslist = 'last 2 versions';
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';
const extractSass = new ExtractTextPlugin({
  filename: '[name].[hash:8].css'
});

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html'
  }),
  extractSass,
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  })
];

const rules = [
  {
    test: /\.(js|jsx)$/,
    include: path.resolve(__dirname, 'src'),
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true // `babel-loader` caching
    }
  },
  {
    test: /(assets\/img\/)(.)+.((png)|(svg)|(jpe?g$)|(gif))$/, // loading images
    loader: 'url-loader',
    options: {
      limit: 10000, // assets smaller than those bytes are served as data URLs
      outputPath: 'static/media/',
      name: '[name].[hash:8].[ext]'
    },
  },
  {
    test: /(assets\/fonts\/)(.)+.((woff)|(woff2)|(eot)|(ttf)|(otf)|(svg))$/, // loading fonts
    loader: 'file-loader',
    options: {
      outputPath: 'static/media/',
      name: '[name].[hash:8].[ext]',
    }
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
    new CleanWebpackPlugin('build'),
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
  entry: ['babel-polyfill', './src/index.js'],
  // options related to how webpack emits results
  output: {
    // the filename template for entry chunks
    filename: 'bundle.js',
    // name of on-demand loaded chunk files
    chunkFilename: '[name].chunk.js',
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    path: isDevelopment ? path.resolve(__dirname, 'public') : path.resolve(__dirname, 'build')
  },
  module: {
    // rules for modules (configure loaders, parser options, etc.)
    rules: rules
  },
  // adding plugins to our configuration
  plugins,
  // devServer configuration
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  }
};

module.exports = config;
