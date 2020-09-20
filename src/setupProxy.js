const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/manage',{
        target:'http://www.web-jshtml.cn/api/react',//配置请求的服务器地址
        changeOrigin:true
    }))
}