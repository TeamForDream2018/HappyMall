import * as actions from "../services/details"

export default {

  namespace: 'details',

  state: {
      onedetail:{},
      listdetail:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({pathname,search,state})=>{
            if(pathname == "/details.html"){
                let categoryId = search.split("=")[1];
                dispatch({
                    type:"queryCategoryList",
                    payload:{
                        categoryId,
                    }
                })
            }
        })
    },
  },

  effects: {
    *queryCategoryList({ payload }, { call, put }) {  // eslint-disable-line
        let {categoryId} = payload;
        let params = {};
        params.categoryId = categoryId;
        let ret  = yield call(actions.getInitMenuData,JSON.stringify(params));
        let listdetail = [];
        //模拟接口返回对应数据
        ret && ret.menuList && ret.menuList.length>0 && ret.menuList.map((item,index)=>{
            if(item.id === categoryId){
               listdetail = item;
            }
        })
        yield put({
            type:"updateState",
            payload:{
                listdetail,
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


