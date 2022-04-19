const express = require('express')

const app = express()

// get方式
app.get('/', (req, res) => {
  console.info(req.query) // req.query获取参数，默认空对象
  res.send('success')
})
app.get('/user', (req, res) => {
  res.send({ name: 'ljc' })
})
// get动态获取数据 :id 是一个动态参数
app.get('/user/:id/:name', (req, res) => {
  console.info(req.params)   // req.params动态匹配到url参数，默认是一个空对象
  res.send(req.params)
})
// post方式
app.post('/user', (req, res) => {
  res.send('1')
})

app.listen(80, () => {
  console.info('express server runing at http://127.0.0.1')
})