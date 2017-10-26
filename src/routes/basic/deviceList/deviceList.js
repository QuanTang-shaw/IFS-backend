import { Table, Button ,Popconfirm,message,Modal,Form, Input, DatePicker, Col } from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item;
import WrappedDeviceForm from '../../../components/EditForm/deviceForm'
import  config  from 'utils/config';


const deviceList =(props)=>{
    const {dispatch,deviceList,basicData}=props
    const {deviceTableData,modalVisible}=basicData
    const columns = [
        {
            title: '图片',
            dataIndex: 'picture',
            render: (v1,v2,v3) =><img src={config.devicePic+v2.devicePic} width="120"/>,
        }, 
        {
            title: '名称',
            dataIndex: 'name',
        }, 
        {
            title: '品牌',
            dataIndex: 'vendor',
        },
        {
            title: '型号',
            dataIndex: 'model',
        },
        {
            title: '序列号',
            dataIndex: 'serialNumber',
        },
        {
            title: '编号',
            dataIndex: 'numbering',
        },
        {
            title: '所属车间',
            dataIndex: 'ownWorkshop',
        },
        {
            title: '所属机台',
            dataIndex: 'ownMachine',
        },
        {
            title:'车间操作',
            // width:500,
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
        dispatch({
            type:'basicData/toggleModal',
            editData:record,
            dataPath:'deviceEditData'
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
            <p style={{borderBottom:'solid 2px #b7b5b3',marginBottom:'30px',fontSize:'25px'}}>设备管理</p>
            <Table rowSelection={rowSelection} columns={columns} dataSource={deviceTableData} />
            <Modal
                visible={modalVisible}
                title="车间编辑"
                onOk={handleOk}
                onCancel={showModal}
                footer={null}
                >
                <WrappedDeviceForm {...basicData}/>
            </Modal>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {
        basicData:state.basicData,        
        // deviceList: state.devicelist
    };
  }
  export default connect(mapStateToProps)(deviceList);
