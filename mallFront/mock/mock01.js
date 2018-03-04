'use strict';

const qs = require('qs');
const mockjs = require('mockjs');  //导入mock.js的模块

const Random = mockjs.Random;  //导入mock.js的随机数


const data = mockjs.mock({
    'data|3': [{
      'id|+1': 1,
      'name': () => {
        return Random.cname();
      },
      'avatar': () => {
        return Random.image('800x150');
      },
    }],
  });

module.exports={
	'GET /banList' (req,res){
		setTimeout(() => {
	      res.json({      //将请求json格式返回
	        success: true,
	        data:data,
	      });
	    }, 2000);
	}
}
