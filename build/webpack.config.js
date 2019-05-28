const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const paths = require('./paths')
const baseConfig = require('./webpack.config.base')
const devServer = require('./devServer')
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [{
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            nameExport: true,
                            camelCase: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        },
                    },
                    'postcss-loader',
                    'stylus-loader'
                ],
                // 制定包含此规则的路径
                include: paths.PATH_SRC
            },
            {
                test: /\.(ts|tsx)?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                include: paths.PATH_SRC
            }
        ]
    },
    plugins: [
        //style jsx
        // 无视指定目录文件，正则下的目录将不会出发重编译
        new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: 'index.html',
        }),
        // 允许创建一个在编译时可以配置的全局常量
        new webpack.DefinePlugin({
            __DEV__: true,
        }),
        // 将CSS提取到单独的文件中。
        // 它为每个包含CSS的JS文件创建一个CSS文件。
        // 它支持CSS和SourceMaps的按需加载。
        new MiniCssExtractPlugin('css/[name].css'),
        // 启用HMR时，此插件将显示模块的相对路径。建议用于开发
        new webpack.NamedModulesPlugin(),
        // 热替换插件
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer,
})