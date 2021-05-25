module.exports = {
    publicPath: './',
    assetsDir: './',

    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: "http://192.168.2.120:5555"
    }
}