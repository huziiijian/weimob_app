module.exports = {
    publicPath: '/',
    proxy: {
        '/GLOBAL': {
            target: 'http://0.0.0.0:8888',
            changeOrigin: true
        },
        '/api3': {
            target: 'http://o2o-adapter.weimobqa.com/',
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                '^/api3/beauty': '/',
                '^/api3': '/'
            }
        }
    }
};
