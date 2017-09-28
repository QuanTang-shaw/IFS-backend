import { DeviceListActive } from '../services/device'
export default {   
    namespace: 'devicelist',   
    state: {
        deviceTableData:[]
    },  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        history.listen(({ pathname }) => {
          if (pathname === '/devicelist') {
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
        })
      },
    },
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },  
    reducers: {
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
            ownMachine:ele.strWorkstationName
          })
        });
        return { ...state };
      },
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
  