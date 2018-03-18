import request from '../utils/request';

export function getInitMenuData(params){
	return request("/menuInitData",{   //请求头设置
          method:'POST',
          mode:'cors',
          credentials: 'include',
          body:params
	})
}

