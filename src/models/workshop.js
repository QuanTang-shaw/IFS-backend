import { workshopListActive } from '../services/workshop'
export default {
    namespace: 'workshop',
    state: {
      dataList:[],
      workshopEditData:[],
      selectedRowKeys: [],
      modalVisible:false,
      loading: false,
    },
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        history.listen(({pathname})=>{
          if (pathname === '/basicData/workshop'){
            workshopListActive({
              "nPageIndex": 0,
              "nPageSize":-1,
              "uFactoryUUID":-1,
              "uWorkshopTypeUUID":-1,
              "uWorkshopAdminUUID":-1
            }).then(data=>{
              console.log(data)
              if(data.obj.hasOwnProperty('objectlist')){
                dispatch({
                  type: 'fetchWorkshopList',
                  payload:data.obj.objectlist 
                })
              }
            })
          }
        })
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      fetchWorkshopList(state,action){
        state.dataList=[];
        action.payload.forEach((ele,index)=> {
          state.dataList.push({
            key: `${index}`,
            numbering: ele.strWorkshopID,
            name: ele.strWorkshopName,
            principal: `John snow`,
            workshopType:ele.strWorkshopTypeName,
            desc:ele.strWorkshopDesc
          })
        });
        return { ...state };
      },
      toggleModal(state,action){
        state.modalVisible=!state.modalVisible;
        console.log(action)
        if(action.hasOwnProperty('editData')) state.workshopEditData=action.editData;
        return { ...state};
      },
      save(state, action) {
        return { ...state, ...action.payload };
      },
      select(state, action){
        return {...state,selectedRowKeys:action.selectedRowKeys};
      },
      reload(state,action){

      }
    },
  
  };
  