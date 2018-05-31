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
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true,
            },
            compress: {
                screw_ie8: true,
            },
            comments: false,
        }),
    ],
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'vendor',
        },
        splitChunks: {
            cacheGroups: {
                default: true,
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
