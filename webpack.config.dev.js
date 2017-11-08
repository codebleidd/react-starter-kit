import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default env => ({
    entry: [
      'webpack-hot-middleware/client',
      './app/index.js'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'static', 'index.html'),
        inject: 'body'
      }),
      new webpack.DefinePlugin({
        'process.env': { ...env }
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['env', 'react', 'react-hmre']
              }
            }
          ],
          include: path.join(__dirname, 'app'),
          exclude: /node_modules/
        },
        {
          test: /.scss$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            { loader: 'sass-loader' }
          ]
        },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
      ]
    }
  })
// }
