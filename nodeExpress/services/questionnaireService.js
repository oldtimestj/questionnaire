/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-03-23 15:10:22
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-24 15:03:23
 */
const db = require('../sql/dbConfig');

exports.questionnaire = (req, res, next) => {
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