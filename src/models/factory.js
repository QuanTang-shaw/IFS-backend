import { FactoryListActive ,FactoryUpdate } from '../services/factory'
export default {
  namespace: 'factoryList',
  state: {
    factoryTableData:[],
    factoryEditData:[],
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
          id:ele.uFactoryUUID,
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
    FactoryEditUpdate(state,action){
      /* FactoryUpdate({
        uFactoryUUID     : self.editPlant.uFactoryUUID,
        uParkUUID        : self.editPlant.uParkUUID,     //从属园区编码
        uFactoryTypeUUID : 1,
        uFactoryAdminUUID: 1,
        strFactoryName   : self.formValidate.name,    //工厂名称
        strFactoryID     : self.editPlant.strFactoryID,    //工厂ID
        strFactoryDesc   : self.formValidate.desc,
        strFactoryNote   : "Note HK LEE 1",
        strFactoryAddress: self.formValidate.address,
        fFactoryLatitude :-1,
        fFactoryLongitude:-1,
        fFactoryAltitude :-1
      }); */
      console.log(action);
      return { ...state};
    },
    toggleModal(state,action){
      state.modalVisible=!state.modalVisible;
      console.log(action)
      state.factoryEditData=action.editData;
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
