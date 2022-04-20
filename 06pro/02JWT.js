const express = require('express')
const JWT = require('jsonwebtoken') // 01
const expressJWT = require('express-jwt')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.static('./files'))
app.use(bodyParser.urlencoded({ ectended: false }))

// 02定义 secret 密钥，建议将密钥命名 secrteKey
const secretKey = 'testJWT ^-^'

// 04注册将JWT字符串还原为JSON对象
// 只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂到 req.user 属性上
app.use(expressJWT({ secret: secretKey, algorithms:['HS256'] }).unless({ path: [/^\/api\//] }))

// 登录接口
app.post('/api/login', (req, res) => {
  // 登录成功后，生成JWT字符串，通过token属性响应给客户端
  if(req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({status: 401, message: '登录失败！'})
  }
  const userinfo = req.body
  // 03登录成功后调用jwt.sgin生成JWT字符串，
  // 参数1:用户信息对象
  // 参数2:加密密钥
  // 参数3:配置对象
  // 千万不要把密码加密
  const tokenStr = JWT.sign({username: userinfo.username}, secretKey, {expiresIn: '310s'})
  console.info(tokenStr, 9)
  res.send({
    status: 200,
    message: '登录成功！',
    token: tokenStr
  })
})

// 有权限的API接口
app.get('/admin/getinfo', (req, res) => {
  // console.info(req)
  res.send({
    status: 200,
    message: '获取用户信息成功',
    data: req.user
  })
})

// 06 使用全局错误处理中间件，捕获解析JWT失败后产生的错误
app.use((err, req, res, next) => {
  if(err.name === 'UnauthorizedError') {
    return res.send({ status: 401, message: '无效token' })
  }
  res.send({ status: 500, message: '未知错误'})
})

app.listen(80, () => {
  console.info('strat')
})
