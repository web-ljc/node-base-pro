const express = require('express')
const cors = require('cors')
const session = require('express-session')

const app = express()
app.use(cors())
// 文件静态托管
app.use(express.static('./files'))
// 解析POST提交的表单数据
app.use(express.urlencoded({ extended: false }))
// 设置session
app.use(session({
  secret: 'key word',
  resave: false,
  saveUninitialized: true
}))

// 登录
app.post('/api/login', (req, res) => {
  console.info('session => ',req.session)
  if(req.body.username != 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败'})
  }

  req.session.user = req.body // 将用户信息，存储到Session中
  req.session.isLogin = true // 将用户登录状态，存储到Session中

  res.send({ status: 0, msg: '登录成功' })
})

// 获取用户名
app.get('/api/username', (req, res) => {
  if(!req.session.user) return res.send({ status: 1, msg: 'fail'})
  console.info(req.session)
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username
  })
})

// 退出登录
app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录'
  })
})

app.listen(80, () => {
  console.info('server start!')
})