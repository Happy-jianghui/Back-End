// 1. 导入 session 中间件
const session = require('express-session')

// 2. 配置 Session 中间件
app.use(session({
    secret: 'keyboard cat',  // secret 属性值可以为任意字符串
    resave: false,  // 固定写法
    saveUninitialized: true   // 固定写法
}))

app.post('./api/login', (req, res) => {
    // 判断用户提交的登录信息是否正确
    if(req.body.usernamen !== 'admin' || req.body.password !== '000000') {
        return res.send({status: 1, msg: '登录失败'})
    }

    req.session.user = req.body  // 将用户的信息，存储到 Session 中
    req.session.islogin = true  // 将用户的登录状态，存储到 Session 中

    res.send({ status: 0, msg: '登录成功' })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
    // 清空当前客户端对应的 session 信息
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出登录成功'
    })
})