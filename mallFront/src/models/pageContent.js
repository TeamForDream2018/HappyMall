import * as actions from "../services/pageContent"

import {message} from "antd";

export default {

  namespace: 'pageContent',

  state: {
      menuList:[],
      title_active_id:"",
      bannerList:[],
      bannerKey:0,
      show_current_banner:[],
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
    *updateActiveKey({ payload },{ call,put,select }){
        let current_model = yield select(state=>state.pageContent);
        let {menuList} = current_model;
        let {title_active_id} = payload;
        let show_current_banner = menuList[title_active_id.split("_")[1] || "0"]["children"];
         yield put({
               type:"updateState",
               payload:{
                   show_current_banner,
                   title_active_id,
               }
        })
    },
},

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },

};


