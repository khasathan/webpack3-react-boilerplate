const Merge = require('webpack-merge');
const webpack = require('webpack');

const CommonConfig = require('./webpack.common');

module.exports = Merge(CommonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    output: {
        sourceMapFilename: '[name].[hash].map',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
