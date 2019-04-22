import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { createFilter } from 'rollup-pluginutils';
const prettier = require('prettier');

function prettify(options = {}) {
  let filter = createFilter(options.include, options.exclude);
  return {
    name: 'prettify',
    transform(code, id) {
      if (filter(id)) {
        return {
          code: prettier.format(code, options),
          map: {
            mappings: ''
          }
        };
      }
    }
  };
}

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
    }),
    // Run plugin with prettier options.
    prettify({
      tabWidth: 2,
      singleQuote: true,
      parser: 'typescript'
    })
  ]
};
