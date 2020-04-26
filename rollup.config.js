import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import nodeResolve from 'rollup-plugin-node-resolve'
import svgr from '@svgr/rollup'
import json from '@rollup/plugin-json'
import visualizer from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: './dist/es',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    nodeResolve(),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      sourceMap: true,
    }),
    svgr(),
    json(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      exclude: ['.storybook', './src/**/*.stories.tsx', './src/**/*.test.(tsx|ts)'],
    }),
    // terser(),
    visualizer(),
  ],
}
