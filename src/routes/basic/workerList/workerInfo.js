import { Table,Button,Popconfirm,message,Modal,Form, Input, DatePicker, Col,Avatar } from 'antd';
import { connect } from 'dva';
import WrappedVendorForm from '../../../components/EditForm/devVendorForm'
import  config  from 'utils/config';


const workerInfo =(props)=>{
    const {dispatch,vendorList,basicData}=props
    const {vendorListData,modalVisible}=basicData
   
    return(
        <div>
            <span>员工详情</span>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {
        basicData:state.basicData,
        // vendorList: state.vendorlist,
    };
  }
export default connect(mapStateToProps)(workerInfo);
