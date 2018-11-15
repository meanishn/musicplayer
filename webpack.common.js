const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['babel-polyfill', path.resolve(__dirname, "src/index.js")],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "/"
    },
    devServer: {
        port: 8001,
        historyApiFallback: true,
        overlay: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{ loader: "babel-loader" }]
            },
            {
                test: /.*\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name]_[hash:7].[ext]',
                        }
                    },
                ]
            },
            {
                test: /.*\.(gif|png|jp(e*)g)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            name: "images/[name].[ext]"
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Services: path.resolve(__dirname, 'src/services'),
            Utilities: path.resolve(__dirname, 'src/utils')
        }
    },
}