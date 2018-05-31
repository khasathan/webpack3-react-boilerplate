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
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        minimize: false,
        runtimeChunk: {
            name: 'vendor',
        },
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    minSize: 1,
                },
            },
        },
    },
});
