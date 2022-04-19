const express = require('express')

const app = express()

app.get('/api/jsonp', (req, res) => {
  // 获取客户端发送过来的回调函数的名字
  const funcName = req.query.callback
  // 得到要通过JSONP形式发送给客户端的数据
  const data = {name: 'ljc', age: 22}
  // 根据前两步得到的数据，拼接出一个函数调用的字符串
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 把上一步拼接得到的字符串，响应给客户端的script标签进行解析
  res.send(scriptStr)
})

app.listen(80, () => {
  console.info('start')
})