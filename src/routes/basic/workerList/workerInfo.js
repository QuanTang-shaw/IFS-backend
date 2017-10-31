import { Table,Button,Popconfirm,message,Modal,Form, Input, DatePicker, Col,Avatar } from 'antd';
import { connect } from 'dva';
import WrappedVendorForm from '../../../components/EditForm/devVendorForm'
import  config  from 'utils/config';


const workerInfo =(props)=>{
    const {dispatch,vendorList,basicData}=props
    const {vendorListData,modalVisible}=basicData
   
    return(
        <div>
            <div style={{display:'flex',alignItems:'start'}}>
                <img src={config.personalPic} style={{height:400}} />
                <div style={{marginLeft:75}}>
                    <p>
                        <strong>姓名:</strong>李铁柱
                    </p>
                        <strong>年龄:</strong>28
                    <p>
                    </p>
                    <p>
                        <strong>性别:</strong>男
                    </p>
                    <p>
                        <strong>民族:</strong>汉
                    </p>
                    <p>
                        <strong>政治面貌:</strong>团员
                    </p>
                    
                </div>
            </div>
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
