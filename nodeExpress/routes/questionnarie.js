/*
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-03-23 15:14:00
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-23 15:14:00
 */
var express = require('express');
var router = express.Router();
var service = require('./../services/questionnaireService');
router.post('/login', service.login);
router.post('/questionnaire', service.questionnaire);

module.exports = router;