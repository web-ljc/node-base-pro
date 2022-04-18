// 在使用require加载用户自定义模块可以省略后缀
const test = require('./01自定义模块')
console.info(test)

// 使用引入对象属性
const name = test.userName
test.sayName()
console.info(name)

// console.info(module)