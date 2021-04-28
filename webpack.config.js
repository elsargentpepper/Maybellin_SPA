const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPLugin([
            {
                inject: true,
                template: '.public/index.html',
                filename: './index.html',
            }
        ])
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 8000
    }
}