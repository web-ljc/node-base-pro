const express = require('express') // 导入express
const app = express()
app.use(express.urlencoded({ extended: false }))

const router = express.Router() // 创建路由对象

router.get('/user/list', (req, res) => { // 挂载用户列表路由
  res.setHeader('Access-COntrol-Allow-Methods', '*')
  const query = req.query
  res.send({
    status: 0,
    msg: 'GET 请求成功',
    data: query
  })
})

router.post('/user/add', (req, res) => { // 挂载添加用户路由
  const body = req.body
  res.send({
    status: 0,
    msg: 'POST 请求成功',
    data: body
  })
})

module.exports = router // 向外导出路由
