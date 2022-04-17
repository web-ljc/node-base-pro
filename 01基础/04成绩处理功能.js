const fs = require('fs')
const path = require('path')

// 读取文件
const readFiles = () => {
  const PUBLIC_PATH = path.join(__dirname, './file/04旧成绩.txt')
  fs.readFile(PUBLIC_PATH, 'utf-8', (err, data) => {
    if(err) {
      return console.info(err)
    }
    writeFiles(data)
  })
}
readFiles()

// 写入文件
const writeFiles = (data) => {
  // 处理数据
  let arr = data.split(' '),
    arrNew = [],
    newStr = ''
  arr.forEach(item => arrNew.push(item.replace('=', ': ')))
  newStr = arrNew.join('\r\n')

  // 写入文件
  const newFilePath = path.join(__dirname, './file/04新成绩.txt')
  fs.writeFile(newFilePath, newStr, (err) => {
    if(err) {
      return console.info(err)
    }
    console.info('写入文件成功')
  })
}