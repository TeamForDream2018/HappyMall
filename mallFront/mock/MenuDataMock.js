'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数


const data = mockjs.mock({
     "menuList": [
         {"id":"10000","name":"坦克英雄","children":[{"id":"10005","name":"盖伦","imgurl":"/imgs/title_menus/gailun.jpg"},{"id":"10001","name":"石头人","imgurl":"/imgs/title_menus/shitouren.jpg"},{"id":"10002","name":"瑞兹","imgurl":"/imgs/title_menus/ruizi.jpg"}]},
         {"id":"20000","name":"法师","children":[{"id":"20001","name":"小法","imgurl":"/imgs/title_menus/gailun.jpg"},{"id":"20002","name":"拉克兹","imgurl":"/imgs/title_menus/gailun.jpg"},{"id":"20003","name":"沙皇","imgurl":"/imgs/title_menus/gailun.jpg"},{"id":"20004","name":"火男","imgurl":"/imgs/title_menus/gailun.jpg"}]},
         {"id":"30000","name":"战士","children":[{"id":"30001","name":"齐天大圣","imgurl":"/imgs/title_menus/gailun.jpg"},{"id":"30002","name":"德邦","imgurl":"/imgs/title_menus/gailun.jpg"},{"id":"30003","name":"皇子","imgurl":"/imgs/title_menus/gailun.jpg"}]},
         {"id":"40000","name":"adc","children":[{"id":"40001","name":"女枪","imgurl":"/imgs/title_menus/gailun.jpg"},{"id":"40002","name":"小炮","imgurl":"/imgs/title_menus/gailun.jpg"},{"id":"40003","name":"轮子妈","imgurl":"/imgs/title_menus/gailun.jpg"}]}
      ]
  });

module.exports={
	'POST /menuInitData' (req,res){
//		setTimeout(() => {
	      res.json({      //将请求json格式返回
	        "success": true,
            "errorCode":9000,
	        "data":data,
	      });
//	    }, 2000);
	}
}
