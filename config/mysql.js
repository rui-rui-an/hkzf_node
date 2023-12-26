module.exports = {
  // 数据库类型
  dialect: 'mysql',
  // 数据库主机地址
  // host: 'localhost',
  host: '120.76.176.237',
  // 用户名
  user: 'liaorui',
  // 密码
  pass: '123456',
  // 端口号
  port: 3306,
  // 数据库名
  database: 'hkzf',
  // 是否允许 query中写多个查询语句
  multipleStatements: false,
  pool: {
    max: 5, // 连接池中最大连接数量
    min: 0, // 连接池中最小连接数量
    idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
  }
}
