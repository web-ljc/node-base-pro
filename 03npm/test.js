// 自定义时间格式化模块
const TIME = require('web-tools-ljc')

const dt = new Date()

console.info(dt.getDate(), dt.getDay())
console.info(TIME.dateFormat(dt)) // 自定义方法

let str = TIME.htmlEscape('<h1>3333rrrr</h1>')
console.info(str)
str = TIME.htmlUnEscape(str)
console.info(str)
