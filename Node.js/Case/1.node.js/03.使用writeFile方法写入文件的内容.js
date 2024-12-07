// 1. 导入 fs 文件系统模块
const fs = require('fs')

//  2. 调用 fs.writeFile() 方法， 写入文件的内容
// 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
// 参数2：必须参数，表示要写入的内容。
// 参数3：可选参数，表示以什么格式写入文件内容，默认值是utf8。
// 参数4：必须参数，文件写入完成后的回调函数。

fs.writeFile('./1.node.js/2.txt', 'abcdef', function(err) {
    // 2.1 如果文件写入成功，则err的值等于 null
    // 2.2 如果文件写入失败，则err的值等于一个 错误对象 
    // console.log(err)

    if (err) {
        return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功！');
    
})