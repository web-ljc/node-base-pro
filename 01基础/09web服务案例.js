const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  // 把请求的url地址映射到具体文件的存放路径
  // let filePath = path.join(__dirname, url)
  // 预定义一个空白的文件路径
  let fpath = ''
  if(url === '/') {
    fpath = path.join(__dirname, './template/index2.html')
  } else {
    fpath = path.join(__dirname, './template', url)
  }

  fs.readFile(fpath, 'utf8', (err, data) => {
    if(err) return res.end('404 Not found.')
    res.end(data)
  })
})

server.listen('80', () => {
  console.info('启动服务')
})