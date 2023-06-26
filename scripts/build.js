const { build } = require('esbuild');
const linaria = require('@linaria/esbuild');
const pkg = require('../package.json');

const config = {
  entryPoints: {
    main: 'src/index.tsx'
  },
  bundle: true,
  get external() {
    return [
      ...Object.keys({
        ...pkg.dependencies,
        ...pkg.peerDependencies
      })
    ]
  },
  get plugins() {
    return [
      linaria.default({
        sourceMap: true
      })
    ];
  }
}

Promise.all([
  build({
    ...config,
    outdir: 'lib/esm',
    format: 'esm',
  }),
  build({
    ...config,
    outdir: 'lib/cjs',
    format: 'cjs',
  })
]).catch(err => {
  process.exit(1);
})