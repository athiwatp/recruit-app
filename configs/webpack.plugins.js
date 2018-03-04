const webpack                 = require('webpack');
const HtmlWebpackPlugin       = require('html-webpack-plugin');
const ExtractTextPlugin       = require('extract-text-webpack-plugin');
const StylelintPlugin         = require('stylelint-webpack-plugin');
const path                    = require('path');
const paths                   = require('./webpack.paths.js');

exports.loaderOptions = new webpack.LoaderOptionsPlugin({
  options: {
    context: paths.root,
  },
});

exports.environmentVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});

exports.configOpts = new webpack.ProvidePlugin({
  'CONFIG': [paths.config, 'default'],
});

exports.uglifyJs = new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false,
  },
  compress: {
    warnings:     false,
    drop_console: true,
  },
});

exports.commonsChunkVendor = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: ({resource}) => /node_modules/.test(resource),
});

exports.commonsChunkManifest = new webpack.optimize.CommonsChunkPlugin({
  name: 'manifest',
});

exports.extractText = (() => {
  const config = {
    filename:  '[name]-[chunkhash:6].css',
    allChunks: true,
  };
  return new ExtractTextPlugin(config);
})();

exports.htmlWebpack = new HtmlWebpackPlugin({
  template: path.resolve(paths.src, 'index.ejs'),
});

exports.stylelintPlugin      = new StylelintPlugin();
exports.hotModuleReplacement = new webpack.HotModuleReplacementPlugin();
exports.noEmitOnErrors       = new webpack.NoEmitOnErrorsPlugin();

exports.moduleConcatenation = new webpack.optimize.ModuleConcatenationPlugin();
