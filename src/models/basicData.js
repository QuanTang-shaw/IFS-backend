import { DeviceListActive,DevcategoryListActive,DevModelListActive } from '../services/device'
export default {
    namespace: 'basicData',
    state: {
      devParType:[],
      devSubType:[],
      devModelData:[]
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
                if (pathname === '/basicData/dev-model'){
                  let MList=await DevModelListActive({
                    nPageIndex:0,
                    nPageSize:-1,
                    uDevTypeUUID:-1,
                    uDevCategoryUUID:-1,
                    uVendorUUID:-1,
                    uUserUUID:-1
                  });
                  console.log('获取设备型号列表:',MList);
                  if(MList.obj.hasOwnProperty('objectlist')){
                    dispatch({
                        type: 'pushModelData',
                        payload:MList.obj.objectlist 
                    });
                  }
                }
            })
          },
    },
  
    effects: {
      fetchSubCategory(){

      },
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
      },
      pushModelData(state,action){
        state.devModelData=[];
        action.payload.forEach((ele,index)=> {
          state.devModelData.push({
            key: `${index}`,
            ModelID:ele.uDevModelUUID,
            modelName: ele.strDevModelName,
            categoryName:ele.strDevCategoryName,
            vendorName:ele.strVendorShortName,
            desc:ele.strDevModelDesc
          })
        });
        return { ...state };
      }
    },
  
  };
  