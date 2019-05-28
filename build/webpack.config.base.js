const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CircularDependencyPlugin = require('circular-dependency-plugin')

const path = require('path')
const paths = require('./paths')

module.exports = {
    entry: {
        index: path.resolve(paths.PATH_SRC, 'index')
    },
    output: {
        path: path.resolve(paths.PATH_DIST),
        publicPath: '/',
        filename: path.join('js', '[name].js'),
        chunkFilename: path.join('js', '[name]-chunk.js'),
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            importLoaders: 1
                        }
                    },
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ],
                include: paths.PATH_SRC,
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader?cacheDirectory',
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                include: [
                    paths.PATH_SRC,
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(?:png|jpe?g|gif|svg|woff|eot|ttf)\??.*$/,
                use: [
                    'url-loader?limit=10000&name=img/[name]-[sha512:hash:base64:7].[ext]',
                ],
                include: [
                    paths.PATH_SRC,
                ],
            },
        ],
    },
    optimization: {
        // 对于动态载入的模块，wepack4采用全新的分块策略
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0,
                },
                vendor: { // 将第三方模块提取出来
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10, // 优先
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        // 检测具有循环依赖的模块
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
    ],
    resolve: {
        // 自动解析确定的扩展
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // 告诉 webpack 解析模块时应该搜索的目录。
        modules: [
            path.resolve(paths.PATH_SRC),
            path.resolve('node_modules'),
        ],
    }
}