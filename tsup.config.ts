import { defineConfig, Options } from 'tsup'
import linaria from '@linaria/esbuild';

const config: Partial<Options> = {
  entry: {
    main: 'src/index.tsx'
  },
  esbuildPlugins: [
    // @ts-ignore
    linaria.default({
      sourceMap: true
    })
  ]
}

export default defineConfig([{
  ...config,
  clean: true,
  outDir: 'lib',
  legacyOutput: true,
  format: ['cjs', 'esm'],
  esbuildOptions: (options) => {
    const postcss = options.plugins?.find(plugin => plugin.name === 'postcss');
    if (postcss) {
      // Disable default postcss
      postcss.setup = () => {};
    }
  }
}, {
  ...config,
  outDir: 'lib/esm',
  format: 'esm',
  dts: {
    only: true
  }
}])