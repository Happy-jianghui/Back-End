const itheima = require('./index')

const dtStr = itheima.dateFormat(new Date())
console.log(dtStr)
console.log('--------------------')
 
 

const htmlstr = '<h1 title = "abc">这是h1标签<span>123&nbsp;</span></h1>' 
const str = itheima.htmlEscape(htmlstr)
console.log(str)
console.log('--------------------')

const str1 = itheima.htmlUnEscape(str)
console.log(str1)

