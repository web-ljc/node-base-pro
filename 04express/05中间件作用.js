const express = require('express')

const app = express()

// 全局中间件，第一个中间件
app.use((req, res, next) => {
  console.info('第一个中间件')
  const time = Date.now() // 获取请求到达服务器的时间
  req.startTime = time // 为req对象挂载自定义属性，从而共享给后边所有路由
  next()
})
// 第二个中间件
app.use((req, res, next) => {
  console.info('第二个中间件')
  next()
})

// 局部中间件
const nw1 = (req, res, next) => {
  console.info('局部中间件')
  next()
}
const nw2 = (req, res, next) => {
  console.info('局部中间件2')
  next() // 结束，不能继续写代码
}

// 使用局部中间件
// 多个局部中间件 m1, m2  ===  [m1, m2]
app.get('/', [nw1, nw2], (req, res) => {
  res.send('index' + req.startTime)
})

app.get('/user', (req, res) => {
  throw new Error('服务器内部发生了错误') // 抛出错误
  res.send('user' + req.startTime)
})

// 错误级别中间件，放在所有路由之后
app.use((err, req, res, next) => {
  console.info('发生了错误=>' + err.message) // 在服务器打印错误信息
  res.send('Err' + err.message) // 在客户端响应错误相关内容
})

app.listen(80, () => {
  console.info('start')
})