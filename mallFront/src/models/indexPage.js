import * as actions from "../services/indePage"

export default {

  namespace: 'indexPage',

  state: {
      showlist:[],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
        return history.listen(({pathname,query})=>{
            if(pathname === "/"){
                dispatch({ type: 'fetchThink'});
            }
        })
    },
  },

  effects: {
    *fetchThink({ payload }, { call, put }) {  // eslint-disable-line
        //获取资源
//        const {showlist} = payload;
        //请求资源
//        const showlist = yield call(actions.loadBanInfo)
        yield put({ type: 'updateState',payload:{showlist}});
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },

};


