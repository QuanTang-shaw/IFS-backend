import { FactoryListActive ,FactoryUpdate } from '../services/factory'
import { DeviceListActive,DevcategoryListActive,DevModelListActive } from '../services/device'
import { workshopListActive } from '../services/workshop'
import { WorkstationListActive } from '../services/machine'
import { Vendor_ListActive } from '../services/vendor'

export default {
    namespace: 'basicData',
    state: {
      factoryTableData:[],
      factoryEditData:[],
      tempData:[],
      devParType:[],
      devSubType:[],
      devModelData:[],
      workshopTableData:[],
      workshopEditData:[],
      selectedRowKeys: [],
      machineTableData:[],
      machineEditData:[],
      deviceTableData:[],
      deviceEditData:[],
      vendorListData:[],
      vendorEditData:[],
      modalVisible:false,      
      modalToggle:{
        factory:false,
        workshop:false
      }      
    },
    subscriptions: {
        setup({ dispatch, history}) {
            history.listen(async ({ pathname }) => {
              if (pathname === '/basicData/factory') {
                FactoryListActive().then(data=>{
                  console.log(data);
                  if(data.obj.hasOwnProperty('objectlist')){
                    dispatch({
                      type: 'fectcFactoryList',
                      payload:data.obj.objectlist 
                    })                
                  }
                })
              }
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
              if (pathname === '/basicData/machine') {
                WorkstationListActive({
                  "nPageIndex": 0,
                  "nPageSize": -1,
                  "uPLineUUID": -1,
                  "uWorkstationTypeUUID":-1,
                  "uWorkstationAdminUUID":-1,
                }).then(data=>{
                  console.log(data);
                  if(data.obj.hasOwnProperty('objectlist')){
                    dispatch({
                       type: 'fetchMachineList',
                       payload:data.obj.objectlist 
                    })                
                  }
                })
              }
              if (pathname === '/basicData/devicelist') {
                DeviceListActive({
                  "nPageIndex": 0,
                  "nPageSize":-1,
                  "uDevModelUUID": -1,
                  "uWorkstationUUID":-1
                }).then(data=>{
                  console.log(data);
                  if(data.obj.hasOwnProperty('objectlist')){
                    dispatch({
                       type: 'fetchDeviceList',
                       payload:data.obj.objectlist 
                    })                
                  }
                })
              }
              if (pathname === '/basicData/dev-vendor') {
                Vendor_ListActive({
                  "nPageIndex": 0,
                  "nPageSize":-1,
                  "uUserUUID":-1
                }).then(data=>{
                  console.log(data);
                  if(data.obj.hasOwnProperty('objectlist')){
                    dispatch({
                       type: 'fetchVendorList',
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
      fetchSubCategory(){

      },
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
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
            desc:ele.strFactoryDesc,
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
        FactoryUpdate({
          uFactoryUUID     : state.factoryEditData.id,
          uParkUUID        : 1,     //从属园区编码
          uFactoryTypeUUID : 1,
          uFactoryAdminUUID: 1,
          strFactoryName   : action.payLoad.name,    //工厂名称
          strFactoryID     : '',    //工厂ID
          strFactoryDesc   : action.payLoad.descript,
          strFactoryNote   : "Note HK LEE 1",
          strFactoryAddress: action.payLoad.address,
          fFactoryLatitude :-1,
          fFactoryLongitude:-1,
          fFactoryAltitude :-1
        });
        console.log('FactoryEditUpdate',action);
        console.log('FactoryEditUpdate-state',state);
        console.log(FactoryUpdate);
        return { ...state};
      },
      fetchWorkshopList(state,action){
        state.workshopTableData=[];
        action.payload.forEach((ele,index)=> {
          state.workshopTableData.push({
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
      fetchMachineList(state,action){
        state.machineTableData=[];
        console.log(action.payload)
        action.payload.forEach((ele,index)=> {
          state.machineTableData.push({
            key: `${index}`,
            numbering: ele.strWorkstationID,
            name: ele.strWorkstationName,
            principal: `John snow`,
            machineType:ele.strWorkstationTypeName,
            desc:ele.strWorkstationDesc
          })
        });
        return { ...state };
      },
      fetchDeviceList(state,action){
        state.deviceTableData=[];
        action.payload.forEach((ele,index)=> {
          state.deviceTableData.push({
            key: `${index}`,
            name: ele.strDeviceName,
            vendor: ele.strVendorShortName,
            model: ele.strDevModelName,
            serialNumber:ele.strDeviceSN,
            numbering:ele.strDeviceID,
            ownWorkshop:ele.strWorkshopName,
            ownMachine:ele.strWorkstationName,
            desc:ele.strDeviceDesc
          })
        });
        return { ...state };
      },
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
      },
      fetchVendorList(state,action){
        state.vendorListData=[];
        action.payload.forEach((ele,index)=> {
          state.vendorListData.push({
            key: `${index}`,
            name: ele.strVendorShortName,
            EN_Name: ele.strVendorShortName_EN,
            fullName: ele.strVendorName,
            address:ele.strVendorAddress,
            desc:ele.strVendorDesc
          })
        });
        return { ...state };
      },
      toggleModal(state,action){
        state.modalVisible=!state.modalVisible;
        // console.log(action)
        console.log('状态数据',state)
        console.log('看看行动',action)
        if(action.hasOwnProperty('editData')){
          let dataPath=action.dataPath;
          console.log("datapath",dataPath);
          state[dataPath]=action.editData;
        }
        // if(action.hasOwnProperty('editData')) state.workshopEditData=action.editData; 
        return { ...state};
      },
      select(state, action){
        return {...state,selectedRowKeys:action.selectedRowKeys};
      },
    },
  
  };
  