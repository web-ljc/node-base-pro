const express = require('express')
const router = require('./router/index') // 导入路由模块

const app = express()

// app.use() 函数的作用就是用来注册全局中间件
// app.use(router) // 注册路由

// 使用app.use()注册路由模块，为路由模块添加统一前缀 /api
app.use('/api', router)

app.listen(80, () => {
  console.info('start')
})