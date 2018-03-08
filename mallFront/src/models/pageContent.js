import * as actions from "../services/pageContent"

import {message} from "antd";

export default {

  namespace: 'pageContent',

  state: {
      menuList:[],
      title_active_id:"",
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({pathname,query})=>{
            if(pathname === "/index.html"){
                dispatch({ type: 'getInitData'});
            }
        })
    },
  },

  effects: {
    *getInitData({ payload }, { call,put,select }) {  // eslint-disable-line
        let ret = yield call(actions.getInitMenuData,null)
        console.log(ret)
        if(ret && ret.menuList.length>0){
          yield put({
               type:"updateState",
               payload:{
                   menuList:ret.menuList,
               }
           })
        }
//        if(ret.errorCode == "9000"){
//           const {menuList} = ret
//
//           put({
//               type:"updateState",
//               payload:{
//                   menuList,
//               }
//           })
//
//            console.log(menuList)
//        }
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },

};


