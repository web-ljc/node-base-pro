// 包的入口文件
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// 向外暴露方法
module.exports = {
  ...date,
  ...escape
}