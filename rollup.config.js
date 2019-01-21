import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/fx.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.es,
      format: 'es'
    },
    {
      file: pkg.umd,
      format: 'umd',
      name: 'Fx'
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
};
