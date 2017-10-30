/* eslint-disable */
var express = require('express')
var path = require('path')
var history = require('connect-history-api-fallback');

var port = 3000
var app = express()

app.use(history())

if (process.env.NODE_ENV !== 'production') {
  console.log('Development mode')
  var webpack = require('webpack')
  var webpackHRM = require('webpack-hot-middleware')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var config = require('./webpack.config.dev')
  var compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
  app.use(webpackHRM(compiler))
}

// app.use(express.static(path.join(__dirname)))

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`App running on http://localhost:${port}`)
  }
})
