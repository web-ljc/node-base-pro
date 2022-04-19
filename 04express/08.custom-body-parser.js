const qs = require('qs')

// 解析表单数据的中间件
const bodyParse = (req, res, next) => {
  // 定义一个str字符串，用来存储客户端发送过来的数据
  let str = ''
  // 监听req的data事件
  req.on('data', (chunk) => str += chunk)
  // 监听req的end事件
  req.on('end', () => {
    const body = qs.parse(str)
    req.body = body
    console.info(body)
    next()
  })
}

module.exports = bodyParse