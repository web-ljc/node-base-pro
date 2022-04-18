// 自定义时间格式化模块
const TIME = require('./03dateFormat')
// 导入第三方moment包
const moment = require('moment')

const dt = new Date()

console.info(dt.getDate(), dt.getDay())
// console.info(TIME.dateFormat(dt)) // 自定义方法
console.info(moment().format('YYYY-MM-DD hh:mm:ss')) // moment包方法