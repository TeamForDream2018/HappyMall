'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数


const data = mockjs.mock({
     "bannerList": [
        {"id":"100000","intro":"输出无解，强势出击！！","imgurl":"/banners/xiaopao.jpg"},
        {"id":"100001","intro":"输出无解，强势出击！！","imgurl":"/banners/jianmo.jpg"},
        {"id":"100002","intro":"输出无解，强势出击！！","imgurl":"/banners/shen.jpg"},
      ]
  });

module.exports={
	'POST /bannerList' (req,res){
	      res.json({      //将请求json格式返回
	        "success": true,
            "errorCode":9000,
	        "data":data,
	      });
	}
}
