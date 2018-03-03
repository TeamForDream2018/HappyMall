import request from '../utils/request';

export function loadPicsInfo(params){
	return request("/pics",{   //请求头设置
          method:'GET',
          mode:'cors',
          credentials: 'include',
          body:params
	})
}
