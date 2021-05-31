import path from 'path'

import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import css from 'rollup-plugin-css-only'
import sourcemaps from 'rollup-plugin-sourcemaps'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import alias from '@rollup/plugin-alias'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const handleWarning = (warning, next) => {
  const { code, importer } = warning

  // Suppress SemanticUI warnings, since we cannot fix them anyway.
  if (code === 'CIRCULAR_DEPENDENCY' && importer.includes('semantic-ui-react')) {
    return null
  }

  return next(warning)
}

const config = {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    css({ output: 'styles.css' }),
    resolve({
      extensions: ['.js', '.ts', '.tsx'],
      browser: true
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx'],
      configFile: path.resolve(__dirname, '.babelrc.json')
    }),
    sourcemaps(),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('development')
      }
    }),
    alias({
      entries: [
        // { find: '@degry/error-boundary', replacement: path.resolve(__dirname, 'packages/error-boundary/src/index.ts') }
        // { find: /@degry\/([\w-]+)/, replacement: path.resolve(__dirname, `packages${path.sep}$1${path.sep}src${path.sep}index.ts`) }
      ]
    }),
    serve({
      contentBase: ['.'],
      historyApiFallback: '/index.html'
    }),
    livereload()
  ],
  onwarn: handleWarning
}

export default config
