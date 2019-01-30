const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge (common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8001,
        historyApiFallback: true,
        // overlay: true,
        // open: true,
        stats: 'errors-only',
        // contentBase: './'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader?sourceMap" }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash:8].css",
        }),        
        new webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('development')
        })
        
    ],
});