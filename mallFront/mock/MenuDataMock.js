'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数


const data = mockjs.mock({
     "menuList": [
         {"id":"10000","name":"坦克英雄","children":[{"id":"10005","name":"盖伦"},{"id":"10001","name":"石头人"},{"id":"10002","name":"瑞兹"}]},
         {"id":"20000","name":"法师","children":[{"id":"20001","name":"小法"},{"id":"20002","name":"拉克兹"},{"id":"20003","name":"沙皇"},{"id":"20004","name":"火男"}]},
         {"id":"30000","name":"战士","children":[{"id":"30001","name":"齐天大圣"},{"id":"30002","name":"德邦"},{"id":"30003","name":"皇子"}]},
         {"id":"40000","name":"adc","children":[{"id":"40001","name":"女枪"},{"id":"40002","name":"小炮"},{"id":"40003","name":"轮子妈"}]}
      ]
  });

module.exports={
	'POST /menuInitData' (req,res){
		setTimeout(() => {
	      res.json({      //将请求json格式返回
	        "success": true,
            "errorCode":9000,
	        "data":data,
	      });
	    }, 2000);
	}
}
