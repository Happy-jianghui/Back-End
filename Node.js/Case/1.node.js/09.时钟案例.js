// 1.1 导入 fs 模块
const fs = require('fs')

// 1.2 导入 path 模块
const path = require('path')

// 1.3 定义正则表达式，分别匹配 <style></style> 和 <script></scrpt>标签
const regStyle = /<style>[\s\S]*<\/style>/

const regScript = /<script>[\s\S]*<\/script>/

// 2,1 调用 fs.readFile() 方法读取文件
fs.readFile(path.join(__dirname, '/clock.html'), 'utf-8', function(err, data) {
    // 2.2 读取 HTML 文件失败
    if (err) {
        return console.log('读取HTML文件失败！' + err.message)
    }
    // 2.3 读取文件成功后，调用对应的三个方法，分别拆解处 css, js, html
    resolveCSS(data)
    resolveJS(data)
    resolveHTML(data)
})

// 3.1 定义处理 css 样式的方法
function resolveCSS(htmlStr) {
    // 3.2 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // console.log(r1)
    // 3.3 将提取出来的样式字符串，进行字符串的 replace 替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // console.log(newCSS)
    // 3.3 调用 fs.writeFile() 方法，将提取的样式，写入到 clock 目录中 index.css的文件里面
    fs.writeFile(path.join(__dirname + '/clock/index.css'), newCSS, function(err) {
        if (err) return console.log(('写入 CSS 样式失败！' + err.message))
        console.log('写入样式文件成功！')
    })
}

// 4.1 定义处理 JS 脚本的方法
function resolveJS(htmlStr) {
    // 4.2 使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr)
    // console.log(r2)
    // 4.3 将提取出来的脚本字符串，进行字符串的 replace 替换操作
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
    // console.log(newCSS)
    // 3.3 调用 fs.writeFile() 方法，将提取的脚本，写入到 clock 目录中 index.js的文件里面
    fs.writeFile(path.join(__dirname + '/clock/index.js'), newJS, function(err) {
        if (err) return console.log(('写入 JS 脚本失败！' + err.message))
        console.log('写入脚本文件成功！')
    })
}

// 5.1 定义处理 HTML 结构的方法
function resolveHTML(htmlStr) {
    // 5.2 将字符串调用 replace 方法，把内嵌的 style 和 script 标签，替换为外联的 link 和 script 标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
    // console.log(newHTML)
    // 5.3 写入 index.html这个文件
    fs.writeFile(path.join(__dirname + '/clock/index.html'), newHTML, function(err) {
        if (err) return console.log('写入 HTML 文件失败！' + err.message)
        console.log('写入 HTML 文件成功')
    })
}