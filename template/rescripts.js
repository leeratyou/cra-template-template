const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const logConfig = config => {
  console.log('--- .rescripts.js -> logConfig -> config', config)
  return config
}

const faster = config => ({
  ...config,
  devtool: 'cheap-module-eval-source-map'
})

const cache = config => ({
  ...config,
  output: {
    filename: '[name].[hash].js'
  }
})

const alias = config => {
  config.resolve = {
    ...config.resolve,
    symlinks: false,
    alias: {
      ...config.resolve.alias,
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/@hot-loader/react-dom')
    }
  }
  return config
}

const plugins = config => {
  const isAnalyze = process.env.ANALYZE
  return {
    ...config,
    plugins: [
      ...config.plugins,
      ...(isAnalyze ? [ new BundleAnalyzerPlugin() ] : [])
    ]
  }
}

const opt = config => {
  return {
    ...config,
    optimization: {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            priority: 10,
            name: 'vendor',
            chunks: 'initial',
          },
          common: {
            test: /common/,
            priority: 20,
            name: 'common',
            chunks: 'initial',
          },
          core: {
            test: /(react|react-dom|react-router|react-router-dom|core-js|mobx|mobx-react|mobx-state-tree)/,
            priority: 30,
            name: 'core',
          },
        }
      }
    }
  }
}

module.exports = [
  opt,
  plugins,
  faster,
  alias,
  ['use-babel-config', '.babel.config.js'],
  ['use-eslint-config', '.eslintrc.json']
]
