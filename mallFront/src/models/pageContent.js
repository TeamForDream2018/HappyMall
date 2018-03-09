import * as actions from "../services/pageContent"

import {message} from "antd";

export default {

  namespace: 'pageContent',

  state: {
      menuList:[],
      title_active_id:"",
      bannerList:[],
      bannerKey:0,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({pathname,query})=>{
            if(pathname === "/index.html"){
                dispatch({ type: 'getInitData'});
                dispatch({type:"getBannerList"});
            }
        })
    },
  },

  effects: {
    *getInitData({ payload }, { call,put,select }) {  // eslint-disable-line
        let ret = yield call(actions.getInitMenuData,null)
        if(ret && ret.menuList.length>0){
          yield put({
               type:"updateState",
               payload:{
                   menuList:ret.menuList,
               }
           })
        }
    },
    *getBannerList({ payload },{ call,put,select }){
        let ret = yield call(actions.getBannerList,null)
        if(ret){
          let {bannerList} = ret;
          yield put({
               type:"updateState",
               payload:{
                   bannerList,
               }
           })
        }
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
    previous(state, action) {
      return { ...state, ...action.payload };
    },
    next(state, action) {
      return { ...state, ...action.payload };
    },
  },

};


