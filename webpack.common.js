const CircularDependencyPlugin = require('circular-dependency-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[hash].bundle.js',
    },
    plugins: [
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
        }),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: 'src/index.html',
            inject: 'body',
        }),
        new webpack.NamedModulesPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: [/node_modules/],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|bmp)$/,
                use: 'file-loader',
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: 'file-loader',
            },
        ],
    },
};
