import { Vendor_ListActive } from '../services/vendor'

export default {   
    namespace: 'vendorlist',   
    state: {
        vendorListData:[],
        vendorEditData:[],
    },  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
        history.listen(({ pathname }) => {
          // console.log(pathname)
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
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },  
    reducers: {
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
        console.log(action)
        if(action.hasOwnProperty('editData')) state.vendorEditData=action.editData;
        return { ...state};
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
  