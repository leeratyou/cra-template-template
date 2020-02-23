const presets = ['react-app']

const isDev = process.env.NODE_ENV === 'development'

const devOpts = isDev
  ? {
    pure: true,
    minify: true
  }
  : {}

const plugins = [
  'react-hot-loader/babel',
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-optional-chaining',
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-syntax-dynamic-import',
  ['babel-plugin-transform-imports', {
    'lodash': {
      'transform': 'lodash/${member}',
      'preventFullImport': true
    },
    '@material-ui/core': {
      'transform': '@material-ui/core/esm/${member}',
      'preventFullImport': true
    },
    '@material-ui/icons': {
      'transform': '@material-ui/icons/esm/${member}',
      'preventFullImport': true
    },
    'core-js': {
      'transform': 'core-js/es/${member}',
      'preventFullImport': true
    }
  }],
  ['babel-plugin-styled-components',
    {
      ssr: false,
      fileName: false,
      ...devOpts
    }
  ]
]

module.exports = {
  presets,
  plugins
}
