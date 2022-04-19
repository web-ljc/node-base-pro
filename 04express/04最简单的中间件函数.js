const express = require('express')

const app = express()

// 中间件函数
const newNext = (req, res, next) => {
  console.info('这是简单的中间件函数')
  next() // 把流转关系，转交给下一个函数或者路由
}
// 将newNext注册为全局生效的中间件
app.use(newNext)

// 简化形式
app.use((req, res, next) => {
  console.info('这是中间件简化形式')
  next()
})

app.get('/', (req, res) => {
  console.info('中间件后调用了/路由')
  res.send('index')
})

app.listen(80, () => {
  console.info('start')
})