import esbuild from 'esbuild';


esbuild.build({
    entryPoints: ['src/background.ts', 'src/deepMod.ts', "src/pageMod.ts"],
    bundle: true,
    outdir: 'dist',
    platform: 'browser',
    target: ["es2022"],
    format: 'esm',  // Immediately Invoked Function Expression
    minify: false, // Set to true for minified output
    sourcemap: true, // Set to true if you want sourcemaps

}).catch(() => process.exit(1));