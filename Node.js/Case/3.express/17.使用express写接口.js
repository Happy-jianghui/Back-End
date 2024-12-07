// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 必须在配置 cors 中间件之间，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // TODO: 定义 JSONP 接口具体的实现过程
    
})


// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./18.apiRouter')
// 把路由模块，注册到 app 上
app.use('/api', router)

// 使用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, function() {
console.log('Express server running at http://127.0.0.1')
})