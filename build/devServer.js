const ApiMocker = require('webpack-api-mocker2')

const proxy = require('./proxy')
const mockPath = path.resolve(__dirname, '../mocks/mock.json')

module.exports = {
    before(app) {
        ApiMocker(app, mockPath)
    },
    proxy,
    clientLogLevel: 'error',
    port: 8848,
    contentBase: paths.PATH_DIST,
    inline: true,
    hot: true,
    open: true,
    disableHostCheck: true,
    progress: true,
    // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。
    historyApiFallback: true,
    // https: true,
}