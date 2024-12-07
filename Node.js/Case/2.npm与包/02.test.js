// 导入自定义的格式化时间的模块
const TIME = require('./01.dateFormat')

// 调用方法，进行时间的格式化
const dt = new Date()
// console.log(dt)

const NewDt = TIME.dateFormat(dt)
console.log(NewDt)

