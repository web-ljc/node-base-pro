-- select * from users
-- select username, password from users
-- insert into users (username, password) values ('ww', '123456')
-- update users set password='888888', status=1 where id=3
-- delete from users where id=3

-- 演示where句子的使用
-- select * from users where status=0
-- select * from users where id>1
-- select * from users where username!='ls'

-- and 和 or
-- select * from users where id < 2 and status = 0
-- select * from users where status=1 or username='zs'

-- order by 排序, ASC升序, DESC降序
-- select * from users order by status ASC
-- select * from users order by id desc
-- 先按照status降序，在按照username字母升序
-- select * from users order by status desc, username asc

-- COUNT(*)函数 查询数量
-- AS 设置别名
-- select count(*) as total from users where status=1
-- select username as uname from users




