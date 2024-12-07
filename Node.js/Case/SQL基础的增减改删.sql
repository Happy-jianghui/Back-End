-- 通过 * 把 users 表中所有的数据查询出来
-- select * from users

-- 从 users 表中把 username 和 password 对应的数据查询出来
-- select username, password from users

-- 向 users 表中，插入新数据，username 的值为 tony stark， password的值为 098123
-- insert into users(username, password) values('tony stark', 098123)
-- select * from users

-- 将 id 为 3 的用户密码，更新成 888888
-- update users set password = '888888' where id = 3
-- select * from users

-- 更新 id 为 2 的用户，把用户密码更新为 admin123 同时，把用户的状态更新为 1
-- update users set password = 'admin123', status = 1 where id = 2
-- select * from users

-- 删除 users 表中 id 为 3 的用户
-- delete from users where id = 3
-- select * from users

-- select * from users where status=1
-- select * from users

-- 使用 AND 来显示所有状态为0且id小于3的用户
-- select * from users where (id < 3 and status = 0)

--  使用 or 来显示所有状态为1 或 username 为 zs 的用户
-- select * from users where status = 1 or username = 'zs'

--  对 status 字段进行升序排序alter
-- select * from users。 order by status

-- 对 id 字段进行降序排序 desc 表示降序排序 asc 表示升序排序
-- select * from users order by id desc

-- 线 status 进行降序排序，在按照 username 字母的顺序，进行升序的排序
-- select * from users order by status desc, username asc

-- 使用count(*) 来统计 users 表中，状态为 0 用户的总数量
-- select count(*) from users where status = 0

-- 使用 AS 关键字给列其别名
select count(*) as total from users where status = 0


