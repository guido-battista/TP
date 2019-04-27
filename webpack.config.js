module.exports = {
    resolve: {
      extensions: ['.js', '.jsx']
    },
    context: __dirname,
    entry: {
      app: ['./statics/reacts/Login.js']
    },
    output: {
      path: __dirname + '/statics/build',
      filename: 'app.js',
      publicPath: '/statics/build/'
    },
	module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
			loader: "babel-loader"
			}
		}
		]
	}
  }