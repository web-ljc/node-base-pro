/**
 * 查询
 * -- 选择所有从表中
 * SELECT * FROM 表名称
 * 
 * -- 选择某一列从表中
 * SELECT 列名, 列名 FROM 表名称 WHERE 列名 运算符 值
 * SELECT username, password FROM users
 * 
 * 
 * 插入
 * -- 插入数据
 * INSERT INTO 表名 (列名1, 列名2) VALUES (值, 值)
 * INSERT INTO users (username, password) VALUES ('wei', '123456')
 * 
 * 
 * 修改
 * UPDATE 表名 SET 列名=值 WHERE 列名2 运算符 值
 * UPDATE users SET password=‘8888’ WHERE id=2
 * UPDATE users SET password=‘8888’, status=1 WHERE id=2
 * 
 * 删除
 * DELETE FROM 表名 WHERE 列名 运算符 值
 * DELETE FROM users WHERE id=3
 */
