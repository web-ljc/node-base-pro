// 1.导入fs模块，来操作文件
const fs = require('fs')
// 1.1导入path，配置引用文件的绝对路径,本文件的绝对路径+相对路径
const path = require('path')
const PUBLIC_PATH = path.resolve(__dirname, 'file/02test.txt')

// 2.调用fs.readFile()方法来读取文件
// 参数1文件路径
// 参数2读取文件的编码格式
// 参数3回调函数，获取失败/成功的结果
fs.readFile(PUBLIC_PATH, 'utf-8', (err, dataStr) => {
  if(err) {
    return console.info('读取文件失败' + err)
  }
  console.info('读取文件成功' + dataStr)
})