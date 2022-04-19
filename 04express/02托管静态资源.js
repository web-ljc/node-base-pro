const express = require('express')

const app = express()

// 静态资源托管，可以从域名后直接访问文件中内容
// 访问资源时从上向下找，找到就不会再找
app.use(express.static('./template')) // localhost/index.html
// app.use(express.static('./file'))
// 静态资源挂载访问路径前缀， 访问/static/index.html
app.use('/static', express.static('./file'))

app.listen(80, () => {
  console.info('start2')
})