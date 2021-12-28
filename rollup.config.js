import copy from 'rollup-plugin-copy';
import fs from 'fs';
import { dirname } from 'path';

// read the manifest
const manifest = JSON.parse(fs.readFileSync('./src/manifest.json'));

const files = [ { fileName: manifest.main, copy: [ 'manifest.json' ] } ];

if (manifest.scripts) {
	Object.entries(manifest.scripts).forEach(([ , value ]) => {
		files.push({ fileName: value });
	});
}

const config = files.map(entry => {
	/** @type {import('rollup').RollupOptions} */
	return {
		input: `src/${entry.fileName}`,
		external: [ 'joi', '@arangodb', '@arangodb/foxx/router' ],
		output: {
			preserveModules: true,
			format: 'cjs',
			dir: `dist/${dirname(entry.fileName)}`,
		},
		plugins: [
			entry.copy ? copy({
				targets: entry.copy.map( fileName => {
					return { src: `src/${fileName}`, dest: 'dist' };
				})
			}) : undefined
		]
	}
});

export default config;