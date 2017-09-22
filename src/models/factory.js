
export default {
  namespace: 'factoryList',
  state: {
    factoryTableData:[
      {
        key: '1',
        name: '工厂一',
        age: 32,
        address: '深圳市南山区科技园',
        contact:'13111110000',
        buildingInfo:{
          area:"34m^2",
          number:6
        }
      }, 
      {
        key: '2',
        name: '工厂二',
        age: 42,
        address: '深圳市宝安区坪洲',
        contact:'13111110000',
        buildingInfo:{
          area:"43m^2",
          number:8
        }
      }, 
      {
        key: '3',
        name: '工厂三',
        age: 32,
        address: '东莞',
        contact:'13111110000',
        buildingInfo:{
          area:"26m^2",
          number:12
        }
      }
    ],
    todoList: [],
    current:''
  },
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
    save(state, action) {
      return { ...state, ...action.payload };
    },
    delete(state){
      console.log(state);
      // alert('delete');
      state.factoryTableData.pop()
      return {...state}
    }
  },

};
