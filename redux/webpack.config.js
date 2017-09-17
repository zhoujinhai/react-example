const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry : './src/entry.js',
	output: {
		path: path.join(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test:/\.(png|jpg|gif)$/,loader: 'url-loader?limit=819200'},
			{test:/\.js$/,loader: "jsx-loader!babel-loader",include: /src/},
			{test:/\.css$/,loader:'style-loader!css-loader?sourceMap'},
			{test:/\.(woff|svg|eot|ttf)\??.*$/,loader:'url-loader?limit=50000&name=[path][name].[ext]'}
		]
	}
}

var src = path.join(__dirname,'..','..','src');
var fs = require('fs');
if(fs.existsSync(src)){
	module.exports.resolve = {alias: {'react-router-redux':src}};
	module.exports.module.loaders.push({
		test: /\.js$/,
		loaders: ['babel'],
		include: src
	});
}