const webpack = require('webpack')
const withSourceMaps = require('@zeit/next-source-maps')()
const CompressionPlugin = require('compression-webpack-plugin')
const withTM = require('next-transpile-modules')(['object-to-formdata'])
const { ANALYZE } = process.env
const { PROCESS_IMAGES } = process.env

module.exports = withSourceMaps(
  withTM({
    poweredByHeader: false,
    env: {
      CSSSR_SPACE_ORIGIN: process.env.CSSSR_SPACE_ORIGIN,
      IS_PRODUCTION: process.env.IS_PRODUCTION,
    },
    webpack: (config, { dev, isServer, buildId }) => {
      // Фиксит npm пакеты, которые зависят от `fs` модуля
      config.node = {
        fs: 'empty',
      }

      const withSentry = () => {
        if (!dev) {
          config.plugins.push(
            new webpack.DefinePlugin({
              'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
            }),
          )
        }

        if (!isServer) {
          config.resolve.alias['@sentry/node'] = '@sentry/browser'
        }
      }

      const fileLoaderConfig = {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: dev ? '[path][name].[ext]' : '[path][name]-[hash:8].[ext]',
          esModule: false,
        },
      }

      const withFonts = () => {
        config.module.rules.push({
          test: /\.(woff2?)$/,
          use: [fileLoaderConfig],
        })
      }

      const responsiveLoaderConfig = {
        loader: 'image-resolution-loader',
        options: {
          publicPath: '/_next',
          name: dev ? '[path][name][resolution].[ext]' : '[path][name]-[hash:8][resolution].[ext]',
          disable: !PROCESS_IMAGES,
          webp: {
            quality: 75,
          },
          jpg: {
            quality: 75,
          },
          png: {
            quality: [0.3, 0.5],
            speed: 1,
          },
        },
      }

      const urlLoaderConfig = {
        loader: 'url-loader',
        options: {
          publicPath: '/_next',
          name: dev ? '[path][name].[ext]' : '[path][name]-[hash:8].[ext]',
          limit: 8192,
          mimetype: 'image/webp',
          esModule: false,
        },
      }

      const webpLoaderConfig = {
        loader: 'webp-loader',
        options: {
          quality: 75,
        },
      }

      const withResponsiveImages = () => {
        config.module.rules.push({
          test: /\.(jpe?g|png|webp|gif|ico)$/,
          oneOf: [
            {
              resourceQuery: /responsive_and_webp/,
              use: [responsiveLoaderConfig, webpLoaderConfig],
            },
            {
              resourceQuery: /responsive/,
              use: [responsiveLoaderConfig],
            },
            {
              use: [urlLoaderConfig],
            },
          ],
        })
      }

      const svgrLoaderConfig = {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              { inlineStyles: false },
              { prefixIds: false },
              {
                cleanupNumericValues: {
                  floatPrecision: 3,
                },
              },
            ],
          },
        },
      }

      const svgrLoaderConfigWithOutSvgo = {
        ...svgrLoaderConfig,
        options: {
          ...svgrLoaderConfig.options,
          svgo: false,
        },
      }

      const withSvg = () => {
        config.module.rules.push({
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /original/,
              use: [svgrLoaderConfigWithOutSvgo, fileLoaderConfig],
            },
            {
              use: [svgrLoaderConfig, fileLoaderConfig],
            },
          ],
        })
      }

      const withCompression = () => {
        if (!dev) {
          config.plugins.push(
            new CompressionPlugin({
              test: /\.js$|\.css$|\.html$|\.svg$/,
              threshold: 10240,
            }),
            new CompressionPlugin({
              test: /\.js$|\.css$|\.html$|\.svg$/,
              algorithm: 'brotliCompress',
              filename: '[path].br[query]',
              compressionOptions: { level: 11 },
              threshold: 10240,
            }),
          )
        }
      }

      withSentry()
      withFonts()
      withSvg()
      withResponsiveImages()
      withCompression()

      if (ANALYZE) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: isServer ? 8888 : 8889,
            openAnalyzer: true,
          }),
        )
      }

      return config
    },
  }),
)
