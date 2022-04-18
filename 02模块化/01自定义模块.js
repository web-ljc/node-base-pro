// 用户自定义模块

// console.info('test1')

const userName = '张三'
function sayName() {
  console.info('sayName => ',userName)
}

// 在一个自定义模块中，默认情况下，module.exports = {}
// 向 module.exports 对象上挂在 userName 属性
module.exports = {
  userName,
  sayName
}

// 可以直接使用exports.type
// 最终向外共享的结果，永远都是module.exports所指向的对象
exports.userName = 'lisi'
// exports.sayName = sayName