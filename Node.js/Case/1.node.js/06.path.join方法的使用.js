const path = require('path')
const fs = require('fs')

/* // 注意： ../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr) // /a/b/d/e

const pathStr1 = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr1) // /a/d/e */

/* fs.readFile(__dirname + '/1.txt', 'utf8', function(err, data) {
    if (err) {
        console.log('读取失败')
    }
    console.log('读取成功')
}) */

fs.readFile(path.join(__dirname, '/1.txt'), 'utf-8', function(err, data) {
    if (err) {
        console.log('读取失败' + err.message)
    }
    console.log('读取成功' + data)
})
