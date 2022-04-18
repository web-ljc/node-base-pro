// 导入http模块
const http = require('http')
// 创建web服务器实例
const server = http.createServer()
// 为服务器实例绑定 request 事件，监听客户请求
// req请求对象，包含了与客户端相关的数据和属性
//    req.url 客户端请求的url地址
//    req.method 客户端的method请求类型
// res响应
//    res.end() 响应请求
//    res.setHeader() 设置响应头数据
server.on('request', (req, res) => {
  const str = `您请求的地址是 ${req.url}, 请求的方式是 ${req.method}`
  console.info(str)
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(str)
})
// 启动服务
server.listen(8080, () => {
  console.info('server runing at http://127.0.0.1:8080')
})
