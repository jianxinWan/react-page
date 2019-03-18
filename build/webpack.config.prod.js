const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base.js')
const paths = require('./paths')

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(paths.PATH_DIST),
        filename: 'js/[name]-[hash:7].js',
        chunkFilename: 'js/[name]-[chunkhash:7].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader?modules&localIdentName=[hash:base64:7]',
                    {
                        loader: 'postcss-loader',
                    },
                    'stylus-loader'
                ],
                include: paths.PATH_SRC,
            },
        ]
    },
    plugins: [
        // 打包前清除输出目录下的文件
        new CleanWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
        ]
    }
})