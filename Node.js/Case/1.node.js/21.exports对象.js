// console.log(exports)
// console.log(module.exports)

// console.log(exports == module.exports)

const username = 'saber'

module.exports.username = username
exports.age = 18
exports.sayHello = function() {
    console.log('Hello')
    
}

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象
