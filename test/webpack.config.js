const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const createDynamicProxy = require('../src')

const config = {
    mode: 'development',
    target: 'web',
    entry: './test/src',
    output: {
        path: path.resolve(__dirname, './test/dist'),
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 'auto',
        hot: true,
        proxy: createDynamicProxy({
            filename: path.resolve(__dirname, './proxy.config.js'),
        }),
    },
}

module.exports = config
