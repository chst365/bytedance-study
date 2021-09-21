const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

    },
    clear: true,
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.json5$/, parser: {} },
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: './index.html',
            title: 'webpack work'
        })
    ]
}