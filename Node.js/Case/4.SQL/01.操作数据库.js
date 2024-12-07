// 1. 导入 mysql 模块
const mysql = require('mysql2')
// 2. 建立与 MySQL 数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1',  //数据库的IP地址
    user: 'root',  // 登录数据库的账号
    password: 'admin123' ,  // 登录数据库的密码
    database: 'my_db_01'  // 指定要操作哪个数据库
})

// 测试 mysql 模块能否正常工作
// db.query('select 1', (err, result) => {
//     // mysql 模块工作期间报错了
//     if(err) return console.log(err.message)
//     // 能够成功执行 SQL 语句
//     console.log(result)
// })

// 查询 users 表中所有的数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
//     // 查询数据失败
//     if (err) return console.log(err.message)
//     // 查询数据成功 
//     // 注意：如果执行的是 select 查询语句，则执行结果是数组
//     console.log(results)
// })

/* // 向 user 表中，新增一条数据， 其中username为 Spider-Man，password为 pcc321
const user = {username: 'Spider-Man', password: 'pcc321'}
// 定义代执行的 SQL 语句
const sqlStr = 'insert into users (username, password) values (?, ?)'
// 执行 SQL 语句
db.query(sqlStr, [user.username, user.password], (err, results) => {
    // 执行 SQL 语句失败
    if (err) return console.log(err.message)
    // 成功
    // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
    // 可以通过 affectedRows 属性，来判断是否插入成功
    if(results.affectedRows === 1) {
        console.log('插入数据成功！')
    }
}) */


/* const user = {username: 'Saber', password: '112233'}
// 定义代执行的 SQL 语句
const sqlStr = 'insert into users set ?'
// 执行 SQL 语句
db.query(sqlStr, user, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('插入数据成功')
    }
}) */

// 更新用户信息
/* const user = {id: 5, username: 'abcdef', password: '009988'}
// 定义 SQL 语句
const sqlStr = 'update users set username=?, password=? where id=?'
// 执行语句
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows == 1) {
        console.log('更新成功 ')
    }
    
}) */


/* const user = {id: 5, username: 'saber', password: '135790'}
// 定义 SQL 语句
const sqlStr = 'update users set ? where id=?'
// 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows == 1){
        console.log('更新成功')
    }
}) */

/* // 删除 id 为 4 的用户
const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 4, (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1) {
        console.log('删除数据成功')
    }
}) */

// 标记删除
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 5], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) {
        console.log('标记删除成功')
    }
})