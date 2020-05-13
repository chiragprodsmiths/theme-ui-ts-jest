import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';

const config: webpack.Configuration | webpackDevServer.Configuration = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{ test: /\.ts(x?)$/, loader: 'ts-loader' },
			{
				enforce: 'pre',
				test: /\.js(x?)$/,
				loader: 'source-map-loader',
			},
		],
	},
	devServer: {
		contentBase: './public',
	},
};

export default config;
