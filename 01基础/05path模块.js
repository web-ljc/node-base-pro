const path = require('path')

// join() 拼接多个路径
// ../ 会抵消一层路径
const pathStr = path.join('/a', '/b/c', '../', '/d', '/e')
console.info('join =>',pathStr) // '/a/b/d/e'


const pathStr2 = path.join(__dirname, './file/05test.js')
console.info('join => ', pathStr2) // /Users/ljc/Documents/code/student/node-pro/01基础/file/05test.js

// basename() 获取文件名
//  参数1:路径
//  参数2:扩展名  /添加后去除扩展名
const fileName = path.basename(__filename)
console.info('baseName =>', fileName) // 05path模块.js

const fileName2 = path.basename(__filename, '.js')
console.info('baseName =>', fileName2) // 05path模块

// extname() 文件扩展名
const fileName3 = path.extname(__filename)
console.info('baseName =>', fileName3) // .js