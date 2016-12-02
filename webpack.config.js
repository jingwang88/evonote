var path = require('path');
var webpack = require('webpack');

module.exports = {
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
	vue: {
	    // ... other vue options
	    loaders: {
	      // load all <script> without "lang" attribute with coffee-loader
	      js: 'babel-loader',
	      css: 'less-loader',
	      // load <template> directly as HTML string, without piping it
	      // through vue-html-loader first
	      html: 'html-loader'
	    }
 	},
	babel: {
		presets: ['es2015', 'stage-2']
	},
	resolve: {
		extentions: ['','.js', '.vue'],
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components')
		}
	},
	devtool: '#eval-source-map'
}
