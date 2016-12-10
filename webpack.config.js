var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
	entry: './src/main',
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].bundle.js',
		publicPath: '/dist/'
	},
	devServer: {
		historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
	},
	module: {
		loaders: [
			{
		        test: /\.vue$/,
		        loader: 'vue'
		    },
			{
		        test: /\.js$/,
		        loader: 'babel-loader',
		        exclude: /node_modules/
		      },
			{
				test: '\.css$',
				loader: 'style!css'
			},
			{
				test: '/\.less$/',
				loader: 'style!css!less'
			},
			{
				test: '/\.(png|jpg|gif)$/',
				loader: 'url-loader?limit=8192'
			}
		]
	},
	babel: {
		presets: ['es2015', 'stage-2'],
		plugins: ['transform-runtime']
	},
	resolve: {
		extentions: ['','.js', '.vue'],
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components'),
			vue: 'vue/dist/vue.js'
		}
	},
	devtool: '#eval-source-map'
}
