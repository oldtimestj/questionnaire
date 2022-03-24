/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-03-21 12:02:06
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-22 20:07:41
 */
var express = require('express');
var router = express.Router();
var service = require('./../services/userService');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



router.post('/login', service.login);
router.post('/userinfo', service.userinfo);

module.exports = router;
