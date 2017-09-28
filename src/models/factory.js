import { FactoryListActive } from '../services/factory'
export default {
  namespace: 'factoryList',
  state: {
    factoryTableData:[],
    todoList: [],
    modalVisible:false,
    modalLoading:false
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // console.log(history);
      history.listen(({ pathname }) => {
        // console.log(pathname)
        if (pathname === '/factory' || pathname === '/') {
          FactoryListActive().then(data=>{
            console.log(data);
            if(data.obj.hasOwnProperty('objectlist')){
              dispatch({
                 type: 'fectcFactoryList',
                 payload:data.obj.objectlist 
              })                
            }
          })
          // dispatch({ type: 'queryWeather' })
        }
      })
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    /* * fectcFactoryList ({
      payload,
    }, { call, put }) {
      const data = yield call(FactoryListActive(), parse(payload))
      // console.log(data)
      yield put({
        type: 'updateState',
        payload: data,
      })
    }, */
  },
  reducers: {
    fectcFactoryList(state,action){
      // console.log(state);
      // console.log(action);
      state.factoryTableData=[];
      action.payload.forEach((ele,index)=> {
        state.factoryTableData.push({
          key: `${index}`,
          name: ele.strFactoryName,
          age: 32,
          address: ele.strFactoryAddress,
          contact:'13111110000',
          buildingInfo:{
            area:"34m^2",
            number:6
          },
          productInfo:{
            main:"注射器",
            yield:"240"
          }
        })
      });
      return { ...state };
    },
    toggleModal(state){
      state.modalVisible=!state.modalVisible;
      return { ...state};
    },
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
