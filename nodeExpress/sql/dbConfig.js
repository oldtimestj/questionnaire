/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-03-21 12:02:06
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-24 15:07:41
 */
const mysql = require('mysql');

exports.base = (sql, data, callback) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'P@ssw0rd',
        database: 'wenjuan'
    });
    connection.connect();
    connection.query(sql, data, function (error, result, fields) {
        if (error) throw error;
        callback(result);
        console.log("数据库连接成功！")
    });

    connection.end();
}
