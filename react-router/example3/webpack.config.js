'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');//css单独打包
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
	devtool: 'eval-source-map',

	entry: {
		main: './src/index.js',//入口文件
		vendor: ['react']
	},

	output: {
		path: './dist',//打包好后文件存放路径
		filename: 'bundle.js',
		publicPath: 'http:localhost:8888/dist/' //启动本地服务后的根目录
	},

	module:{
		loaders: [
			{test:/\.js$/,loader: "jsx!babel",include: /src/},
			{test:/\.css$/,loader:ExtractTextPlugin.extract("style","css-loader!postcss-loader")},
			{test:/\.scss$/,loader:ExtractTextPlugin.extract("style","css-loader!postcss-loader!sass-loader")},
			{test:/\.(png|jpg|gif)$/,loader:"url?limit=819200"}
		]
	},

	babel: {
		presets: ['es2015','stage-0','react'],
		plugins: ['transform-runtime', ['import', {
          libraryName: 'antd',
          style: 'css'
        }]]
	},

	postcss: [
		require('autoprefixer') //调用autoprefixer插件,自动补全css3
	],

	devServer: {
		port: 8888,
		color: true, //终端中输出结果为彩色
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},

	plugins: [
		new ExtractTextPlugin('main.css'),
		new CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js'
		})
	]
}