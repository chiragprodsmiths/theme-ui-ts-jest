import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';
import { config } from './src/configs';

const webPackConfig: webpack.Configuration | webpackDevServer.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.tsx',
  node: {
    fs: 'empty',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: 'ts-loader', exclude: /node_modules/ },
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        loader: 'source-map-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    index: 'index.html',
    contentBase: './public',
  },
  plugins: [new webpack.EnvironmentPlugin(config)],
};

export default webPackConfig;
