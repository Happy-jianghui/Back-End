const path = require('path')

// 文件存放的路径
const fpath = '/a/b/v/index.html'

const fext = path.extname(fpath)
console.log(fext) // .html 