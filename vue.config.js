const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
module.exports = {
	publicPath: './',
	configureWebpack: config => {
		if (process.env.NODE_ENV !== 'production') return;
		return {
			plugins: [
				new PrerenderSPAPlugin({
					staticDir: path.join(__dirname, 'dist'),
					routes: ['/'],
					renderer: new Renderer({
						inject: {
							foo: 'bar'
						},
						headless: false,
						renderAfterDocumentEvent: 'render-event'
					})
				}),
			],
		};
	}
}
