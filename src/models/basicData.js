import { DeviceListActive,DevcategoryListActive } from '../services/device'
export default {
    namespace: 'basicData',
    state: {
      devParType:[],
      devSubType:[]
    },
    subscriptions: {
        setup({ dispatch, history}) {
            history.listen(async ({ pathname }) => {
                if (pathname === '/basicData/dev-type') {
                  let parList =await DevcategoryListActive({
                    "nPageIndex": 0,
                    "nPageSize": -1,
                    "uDevCategoryParentUUID":0,
                    "uUserUUID":-1
                  });
                if(parList.obj.hasOwnProperty('objectlist')){
                  dispatch({
                      type: 'fetchDevParCategoryList',
                      payload:parList.obj.objectlist 
                  });
                  let subList =await DevcategoryListActive({
                    "nPageIndex": 0,
                    "nPageSize": -1,
                    "uDevCategoryParentUUID":parList.obj.objectlist[0].uDevCategoryUUID,
                    "uUserUUID":-1
                  });
                  console.log('sblist',subList); 
                  if(subList.obj.hasOwnProperty('objectlist')){
                    dispatch({
                      type: 'fetchDevSubCategoryList',
                      payload:subList.obj.objectlist
                    })       
                  }                  
                }
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
      fetchDevParCategoryList(state,action){
          state.devParType=[];
          action.payload.forEach((ele,index)=> {
            state.devParType.push({
              key: `${index}`,
              id:ele.uDevCategoryUUID,
              name: ele.strDevCategoryName,
              age: 32,
              address: ele.strDevCategoryAddress,
              desc:ele.strDevCategoryDesc
            })
          });
          return { ...state };
      },
      fetchDevSubCategoryList(state,action){
        state.devSubType=[];
        action.payload.forEach((ele,index)=> {
          state.devSubType.push({
            key: `${index}`,
            id:ele.uDevCategoryUUID,
            name: ele.strDevCategoryName,
            age: 32,
            address: ele.strDevCategoryAddress,
            desc:ele.strDevCategoryDesc
          })
        });
        return { ...state };
      }
    },
  
  };
  