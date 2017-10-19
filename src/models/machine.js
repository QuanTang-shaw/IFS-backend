import { WorkstationListActive } from '../services/machine'
export default {
  namespace: 'machinelist',
  state: {
    machineTableData:[],
    machineEditData:[],
    modalVisible:false,
    modalLoading:false
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // console.log(history);
      history.listen(({ pathname }) => {
        // console.log(pathname)
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
      })
    },
  },
  effects: {
    
  },
  reducers: {
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
    toggleModal(state,action){
      // state.modalVisible=!state.modalVisible;
      // return { ...state};
      console.log(action)
      state.modalVisible=!state.modalVisible;
      if(action.hasOwnProperty('editData')) state.machineEditData=action.editData;
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
