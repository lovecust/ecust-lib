module.exports = {
	// Don't attempt to continue if there are any errors.
	bail: true,
	devtool: 'source-map',
	entry: {
		library: './src/index'
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[id]-[name].chunk.js',
		path: __dirname + '/dist'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			}
		]
	}
};
