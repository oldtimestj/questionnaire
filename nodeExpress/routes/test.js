/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-03-21 12:02:06
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-24 15:08:13
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'wenjuan'
});
connection.connect();
connection.query('SELECT * FROM sys_user', function (error, result, fields) {
    if (error) throw error;
    console.log("the result is:", result);
    console.log("数据库连接成功！")
});