'use strict'
// const do ES6
const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist' ),
        filename: 'bundle.js',
        // publicPath local aonde o webpack do webserver vai ficar assistindo o local de dev
        publicPath: '/static/'
    }
} 