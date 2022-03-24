/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-03-21 12:02:06
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-23 09:20:05
 */
const db = require('./../sql/dbConfig');

exports.login = (req, res, next) => {
    let loginForm = req.body.loginForm;
    const { username, password } = loginForm;
    let sql = `SELECT * FROM sys_user WHERE name = '${username}' and password =  '${password}'`;
    let data = [username, password];
    db.base(sql, data, (response) => {
        if (response.length == 0) {
            res.json({
                status: '1',
                msg: '无此结果',
                result: ''
            });
        } else {
            res.json({
                status: '0',
                msg: '查询成功',
                result: response[0]
            });
        }
    })
}
exports.userinfo = (req, res, next) => {
    console.log('req', req.body);
    const { name, isAdmin } = req.body;
    let sql;
    isAdmin === '1' ? sql = `SELECT * FROM sys_user` : sql = `SELECT * FROM sys_user where name=?`
    console.log('sql', sql);
    let data = [name]
    db.base(sql, data, (response) => {
        if (response.length == 0) {
            res.json({
                status: '1',
                msg: '暂无数据',
                result: []
            });
        } else {
            res.json({
                status: '0',
                msg: '查询成功',
                result: response
            });
        }
    })
}