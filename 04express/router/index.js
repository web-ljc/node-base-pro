const expresss = require('express') // 导入express

const router = expresss.Router() // 创建路由对象

router.get('/user/list', (req, res) => { // 挂载用户列表路由
  res.send('Get user list.')
})

router.post('/user/add', (req, res) => { // 挂载添加用户路由
  res.send('Add new user.')
})

module.exports = router // 向外导出路由
