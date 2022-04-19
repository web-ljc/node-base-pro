const express = require('express')

const app = express()

// 通过 express.json() 中间件，解析表单中的JSON格式的数据
app.use(express.json())
// 通过 express.urlencoded() 中间件，来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
  // 在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  console.info(req.body)
  res.send('ok')
})

app.post('book', (req, res) => {
  // 在服务端可以通过req.body获取 JSON格式的表单数据 和 url-encoded 格式的数据
  console.info(req.body)
  res.send('ok')
})

app.listen(80, () => {
  console.info('start')
})