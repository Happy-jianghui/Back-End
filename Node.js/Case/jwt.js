// 1. 导入用于生成 JWR 字符串的包
const jwt = require('jsonwebtoken')
// 2. 导入用于将客户端发送过来的 JWT 字符串，解析还原成 JSON 对象的包
const expressJWT = require('express-jwt')

// 3. secret 密钥的本质：就是一个字符串
const secretKey = 'Saber No1 ^_^'

// 登录接口
app.post('./api/login', function(req, res) {
    // ... 省略登录失败情况下的代码
    // 用户登录成功之后，生成 JWT 字符串，通过 token 属性响应给客户端
    res.send({
        status: 200,
        message: '登录成功',
        // 调用 jwt.sign() 生成 JWT 字符串，三个参数分别是：用户信息对象、加密密钥、配置对象（可以配置当前 token 的有效期）
        token: jwt.sign({username: userinfo.username}, secretKey, {expresIn: '30s'})
    })
})

// 使用 app.use() 来注册中间件
// expressJWT({ secret: secretKey }) 就是用来解析 Token 的中间件
// .unless({ path: [/^\/api\//] }) 用来指定哪些接口不需要访问权限
app.use(expressJWT({ secret: secretKey })).unless({ path: [/^\/api\//] })

// 这是一个有权限的 API 接口
app.get('./admin/getinfo', function(req, res) {
    console.log(req.user)
    res.send({
        status: 200,
        message: '获取用户信息成功',
        data: req.user
    })
})

app.use((err, req, res, next) => {
    // token 解析失败导致的错误
    if(err.name === 'UnauthorizedError') {
        return res.send({ status: 401, message: '无效的token' })
    }
    // 其它原因导致的错误
    res.send({ status: 500, message: '未知错误' })
})