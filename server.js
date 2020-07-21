'use strict'

const webpack = require('webpack')
const WebpacDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpacDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true}
}).listen(3000, (err) =>{
    if (err) {
        return console.log(err)
    }

    console.log('listening on localhost:3000')
})