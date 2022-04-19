// 倒入MySQL模块
const mysql = require('mysql')

// 建立与MySQL数据库的连接
const db = mysql.createPool({
  host: '127.0.0.1',    // 数据库的ip
  user: 'root',         // 登录数据库账号
  password: 'admin123', // 登录密码
  database: 'my_db_01'  // 指定操作数据库名
})
// 获取所有数据 - 成功返回数组
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, res) => {
//   if(err) return console.info(err.message)
//   // 执行select查询语句，执行结果是数组
//   console.info('success', res)
// })

// 新增数据 - 成功返回对象  ? 是占位符
// const user = {username: 'spider-Man2', password: '666666'}
// const sqlStr = 'insert into users (username, password) values (?, ?)'
// db.query(sqlStr, [user.username, user.password], (err, res) => {
//   if(err) return console.info('err =>', err.message)
//   // 执行insert into 插入语句，res是一个对象
//   if(res.affectedRows === 1) console.info('success =>',res)
// })
// 便捷新增数据
// const user = {username: 'spider-Man4', password: '666666'}
// const sqlStr = 'insert into users set ?'
// db.query(sqlStr, user, (err, res) => {
//   if(err) return console.info('err =>', err.message)
//   // 执行insert into 插入语句，res是一个对象
//   if(res.affectedRows === 1) console.info('success =>',res)
// })

// 更新用户信息 - 成功返回对象
// const user = { id: 29, username: 'test', password: '000000'}
// const sqlStr = 'update users set username=?, password=?  where id=?'
// db.query(sqlStr, [user.username, user.password, user.id], (err, res) => {
//   if(err) return console.info(err.message)
//   if(res.affectedRows === 1) console.info('更新数据成功')
// })
// 更改用户信息-简洁
// const user = { id: 29, username: 'test1', password: '111111'}
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr, [user, user.id], (err, res) => {
//   if(err) return console.info(err.message)
//   if(res.affectedRows === 1) console.info('更新数据成功')
// })

// 删除数据 - 成功返回对象
// const sqlStr = 'delete from users where id=?'
// db.query(sqlStr, 25, (err, res) => {
//   if(err) console.info(err.message)
//   if(res.affectedRows === 1) console.info('删除成功')
// })
// 标记删除 - 更改status
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 29], (err, res) => {
  if(err) return console.info(err.message)
  if(res.affectedRows === 1) console.info('标记删除成功')
})