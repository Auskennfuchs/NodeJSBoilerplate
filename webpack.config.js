const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack')

const parentDir = path.join(__dirname, './');

module.exports = {
    entry: {
        app: path.join(parentDir, './app/index.js')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(parentDir, './app/index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
        }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(parentDir, 'dist')
    }
};