const express = require('express')

const app = express()

// cors中间件 跨域问题
const cors = require('cors')
app.use(cors())

const router = require('./router')
app.use('/api', router)

app.listen(80, () => {
  console.info('start')
})