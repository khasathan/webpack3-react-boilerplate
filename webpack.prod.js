const Merge = require('webpack-merge');
const webpack = require('webpack');

const CommonConfig = require('./webpack.common');

module.exports = Merge(CommonConfig, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
    ],
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'vendor',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
});
