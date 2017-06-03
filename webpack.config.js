const path = require('path')
const webpack = require('webpack')

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:9000',
		'webpack/hot/only-dev-server',
		require.resolve('react-error-overlay'),
		require.resolve('react-dev-utils/webpackHotDevClient'),
		'./index.js',
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',

		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: ['node_modules', path.resolve(__dirname, './src')]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
		port: 9000,
		publicPath: '/',
		hot: true,
	},
	devtool: 'inline-source-map',
	module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                }],
            },
    	    {
        		test: /\.css$/,
        		use: ["style-loader", "css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]", 'resolve-url-loader'],
    	    },
    	    {
        		test: /\.scss$/,
        		use: ['style-loader', 'css-loader', 'resolve-url-loader','sass-loader']
    	    },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 30000,
                        name: '[name]-[hash].[ext]',
                    },
                }],
            },
        ]
    },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	]
}
