import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import UglifyJS from 'uglifyjs-webpack-plugin'

export default {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'static', 'index.html'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(['dist']),
    new UglifyJS()
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['env', 'react']
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
}
