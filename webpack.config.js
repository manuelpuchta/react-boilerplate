const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDevelopment = nodeEnv === 'development';

const plugins = [
  // adding plugins to your configuration

  new webpack.NamedModulesPlugin(),
  // This plugin will cause the relative path of the module to be displayed when HMR is enabled.

  new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
    chunks: ['manifest', 'vendor', 'index'],
    filename: 'index.html'
  }),
  // The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.

  new ManifestPlugin({
    fileName: 'manifest.json',
  }),
  // Plugin for generating an asset manifest.

  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => {
      // this assumes your vendor imports exist in the node_modules directory
      return module.context && module.context.indexOf('node_modules') !== -1;
    }
  }),
  // We extract all vendors into a separate file

  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  // We extract the webpack bootstrap logic into a separate file

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(nodeEnv)
  })
  // The DefinePlugin allows you to create global constants which can be configured at compile time.
];

const rules = [
  // rules for modules (configure loaders, parser options, etc.)
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true // babel-loader caching
    }
  }
];

if (isDevelopment) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
    // Enables Hot Module Replacement, otherwise known as HMR.
  )
} else {
  plugins.push(
    new CleanWebpackPlugin('build'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  );
}

module.exports = {
  entry: { // string | object | array
    index: ['babel-polyfill', './src/index.js'],
  },
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: isDevelopment ? path.resolve(__dirname, 'public') : path.resolve(__dirname, 'build'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: '[name].[hash:8].js', // string
    // the filename template for entry chunks

    chunkFilename: '[name].chunk.js',
    // name of on-demand loaded chunk files

    publicPath: '/', // string
    // the url to the output directory resolved relative to the HTML page

  },
  module: {
    // configuration regarding modules

    rules: rules
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    // directories where to look for modules
  },
  devtool: isDevelopment ? 'inline-source-map' : false,
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  devServer: {
    // Tell the server where to serve content from
    contentBase: path.join(__dirname, 'public'),
    // Inline mode is recommended when using Hot Module Replacement.
    inline: isDevelopment,
    // hot module replacement. Depends on HotModuleReplacementPlugin
    hot: isDevelopment,
    // For some systems, watching many file systems can result in a lot of CPU or memory usage.
    // It is possible to exclude a huge folder like node_modules
    watchOptions: {
      ignored: /node_modules/,
    },
    // Enable gzip compression for everything served
    compress: true,
    // Specify a port number to listen for requests on
    port: 3000
  },
  // devServer configuration
  plugins,
  // adding plugins to our configuration
};
