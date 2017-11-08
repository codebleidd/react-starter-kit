import express from 'express'// eslint-disable-line
// import path from 'path'
import history from 'connect-history-api-fallback'// eslint-disable-line

import webpack from 'webpack'// eslint-disable-line
import webpackHMR from 'webpack-hot-middleware'// eslint-disable-line
import webpackDevMiddleware from 'webpack-dev-middleware'// eslint-disable-line

import config from './webpack.config.dev'

const APP_PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || process.argv[2] || 'dev'
const webpackConfig = config({ NODE_ENV: JSON.stringify(NODE_ENV) })
const compiler = webpack(webpackConfig)

const app = express()

app.use(history())
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHMR(compiler))

// app.use(express.static(path.join(__dirname)))

console.log('Development mode') // eslint-disable-line
app.listen(APP_PORT, (err) => {
  if (err) {
    console.log(err)// eslint-disable-line
  } else {
    console.log(`App running on http://localhost:${APP_PORT}`)// eslint-disable-line
  }
})
