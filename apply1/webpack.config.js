'use strict';

const path = require('path');

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist')	
	},
	// externals: {
	// 	'react': 'React'
	// },
	module: {
		loaders: [
			{test: /\.js$/,loader: 'jsx!babel',include: /src/},
			{test: /\.css$/,loader: 'style!css'},
			{test: /\.scss$/,loader: 'style!css'},
			{test: /\.(png|jpg)/,loader: 'url?limit=8192'}
		]
	}
};