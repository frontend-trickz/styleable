// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			outDir: 'docs',
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/svelte-styleable'
		}
	}
};

export default config;
