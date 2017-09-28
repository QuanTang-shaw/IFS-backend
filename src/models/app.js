
export default {   
      namespace: 'app',   
      state: {},
    
      subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
      },
      effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
          yield put({ type: 'save' });
        },
      },  
      reducers: {
        updateState (state, { payload }) {
          // alert('update');
          return {
            ...state,
            ...payload,
          }
        },
        save(state, action) {
          return { ...state, ...action.payload };
        },
      },
    
    };
    