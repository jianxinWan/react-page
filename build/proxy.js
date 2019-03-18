module.exports = {
    '/webapi/github': {
        target: 'https://api.github.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/webapi/github': '/'
        },
        logLevel: 'debug',
    },
}