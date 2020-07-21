'use strict'
// const do ES6
const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
    devtool: 'source-map',
    entry: [
        // configuracoes de entrada para rodar o hotloader
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
],
    output: {
        path: path.join(__dirname, 'dist' ),
        filename: 'bundle.js',
        // publicPath local aonde o webpack do webserver vai ficar assistindo o local de dev
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],

        // presets para uso do babel
        loaders: [{
            test: /\.js$/, // procurar todos arquivos js 
            exclude: /node_modules/, // ignorar pastas
            include: /src/,
            loader: 'babel'
        }]
    }
}) 