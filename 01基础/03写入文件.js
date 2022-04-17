// 引入fs模块来操作文件
const fs = require('fs')
// 引入path模块来操作路径
const path = require('path')
const PUBLIC_PATH = path.resolve(__dirname, './file/03newTest.txt')

// fs.writeFile() 写入文件
//  参数1:表示文件的存放路径
//  参数2：表示写入的内容
//  参数3:回调函数
//    成功： 文件写入成功  error = null
//    失败： 文件写入失败  error = 错误对象
// 注意：
//    1fs.writeFile() 方法只能用来创建文件，不能创建路径
//    2重复调用fs.writeFile()写入同一个文件，新写的内容会覆盖旧内容
fs.writeFile(PUBLIC_PATH, '写入文件', (error) => {
  console.info(error)
  if(error) {
    return console.info('写入文件失败')
  }
  console.info('写入文件成功')
})