const fs = require('fs')
const path = require('path')

// 读取文件
const readFiles = () => {
  const filePath = path.join(__dirname, './template/index.html')
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err) return console.info('读取文件失败 => ',err)
    writeFiles(data)
  })
}
readFiles()

// 处理文件
const writeFiles = (data) => {
  // console.info('write => ',data)
  resolveFile(data, 'css')
  resolveFile(data, 'js')
  resolveHtml(data)
}

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
// 处理css、js文件
const resolveFile = (htmlStr, type) => {
  let res = '',
    newCss = '',
    filePath = ''
  if (type === 'css') {
    res = regStyle.exec(htmlStr)
    newCss = res[0].replace(/<style>/g, '').replace(/<\/style>/g, '')
    filePath = path.join(__dirname, './template/index.css')
  } else if(type === 'js') {
    res = regScript.exec(htmlStr)
    newCss = res[0].replace(/<script>/g, '').replace(/<\/script>/g, '')
    filePath = path.join(__dirname, './template/index.js')
  }
  fs.writeFile(filePath, newCss, (err) => {
    if(err) return console.info('写入文件错误 => ', err)
    console.info('写入文件成功')
  })
}
// 处理html
const resolveHtml = (htmlStr) => {
  const filePath = path.join(__dirname, './template/index2.html')
  const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
  .replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(filePath, newHtml, (err) => {
    if(err) return console.info('写入文件报错', err)
    console.info('写入文件成功')
  })
}