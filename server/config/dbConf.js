let dbConf = null;
const DEV = {
    database: 'stydy-demo',    //数据库
    user: 'root',    //用户
    password: '123456',     //密码
    port: '3306',        //端口
    host: '127.0.0.1'    //服务ip地址
}

const PRO = {
    database: 'stydy-demo',    //数据库
    user: 'root',    //用户
    password: '123456',     //密码
    port: '3306',        //端口
    host: '118.24.233.181'     //服务ip地址
}
dbConf = DEV;
module.exports = dbConf;