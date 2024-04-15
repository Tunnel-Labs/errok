import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [{
		input: './exports/main.ts',
		name: 'main',
	}],
	outDir: '.build',
	rollup: {
		emitCJS: true,
		inlineDependencies: true,
	},
	declaration: true,
});
