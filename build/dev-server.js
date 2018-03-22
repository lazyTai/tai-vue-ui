
var express = require('express')
var webpack = require('webpack');
var path = require('path');
var proxy = require('http-proxy-middleware');
var app = express()
var webpackConfig = require('./webpack.dev.conf')
var compiler = webpack(webpackConfig)
var port = process.env.PORT || 8080;
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => { }
})


app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

app.use(path.resolve(__dirname, '../public'), express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n')
})



module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
})