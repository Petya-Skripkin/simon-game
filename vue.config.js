const path = require('path');
module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				"@components": path.resolve(__dirname, 'src', 'components'),
				"@styles": path.resolve(__dirname, 'src', 'styles'),
			}
		}
	},

	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@styles/colors.scss";`
			}
		}
	},

	publicPath: process.env.NODE_ENV === 'production'
		? '/vue-js-simon-game/'
		: '/'
}