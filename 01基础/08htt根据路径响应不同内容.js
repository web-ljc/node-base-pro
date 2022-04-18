const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  console.info(url)
  let content = '<h1>404 Not found!</h1>'
  if(url === '/' || url === '/index') {
    content = '<h1>首页</h1>'
  } else if(url === '/about') {
    content = '<h1>关于页面</h1>'
  }
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(content)
})

server.listen('80', () => {
  console.info('服务启动')
})