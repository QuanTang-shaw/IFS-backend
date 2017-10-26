import { Table,Button,Popconfirm,message,Modal,Form, Input, DatePicker, Col } from 'antd';
import { connect } from 'dva';
import WrappedVendorForm from '../../../components/EditForm/devVendorForm'
import  config  from 'utils/config';


const devVendorList =(props)=>{
    const {dispatch,vendorList,basicData}=props
    const {vendorListData,modalVisible}=basicData
    const columns = [
        {
            title: 'LOGO',
            dataIndex: 'logo',
            render: (v1,v2,v3) =><img src={config.logoPic+v2.vendorPic} width="120"/>,
        }, 
        {
            title: '名称',
            dataIndex: 'name',
        }, 
        {
            title: '英文名称',
            dataIndex: 'EN_Name',
        },
        {
            title: '全称',
            dataIndex: 'fullName',
        },
        {
            title: '所在地',
            dataIndex: 'address',
        },
        {
            title: '操作',
            key: 'action',
            render:(text, record, index)=>(
              <div style={{display:'flex','justifyContent': 'space-around'}}>
                <Button icon="edit" onClick={showModal.bind(this,record)}>编辑</Button>
                <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                  <Button type="danger" icon="delete">删除</Button>
                </Popconfirm>
              </div>
            )
        }
    ];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User',    // Column configuration not to be checked
        }),
    };
    const confirm=(e)=> {
        console.log(e);
        message.success('删除成功');
        dispatch({
            type:'factoryList/delete'
        })
    }
    const cancel=(e)=> {
        console.log(e);
        message.error('Click on No');
    }
    const showModal = (record,ev) => {
        // console.log(record)
        dispatch({
            type:'basicData/toggleModal',
            editData:record,
            dataPath:'vendorEditData'
        })
    }
    const handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    return(
        <div>
            <p style={{borderBottom:'solid 2px #b7b5b3',marginBottom:'30px',fontSize:'25px'}}>厂商管理</p>
            <Table rowSelection={rowSelection} columns={columns} dataSource={vendorListData} />
            <Modal
                visible={modalVisible}
                title="工厂编辑"
                onOk={handleOk}
                onCancel={showModal}
                footer={null}
            >
                <WrappedVendorForm {...basicData}/>
            </Modal>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {
        basicData:state.basicData,
        // vendorList: state.vendorlist,
    };
  }
  export default connect(mapStateToProps)(devVendorList);
