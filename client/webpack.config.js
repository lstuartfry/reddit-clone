const path = require('path');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// TO DO - PRODUCTION
// https://developerhandbook.com/webpack/how-to-configure-scss-modules-for-webpack/

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/env', '@babel/react'],
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
					'sass-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.scss'],
		modules: ['node_modules', '.'],
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 3000,
		proxy: {
			'/reddit': 'http://localhost:5000',
		},
		publicPath: 'http://localhost:3000/dist/',
		hotOnly: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// new MiniCssExtractPlugin({
		// 	filename: isDevelopment ? '[name].css' : '[name].[hash].css',
		// 	chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
		// }),
	],
};
