import { Table,Button,Popconfirm,message,Modal,Form, Input, DatePicker, Col,Avatar } from 'antd';
import { connect } from 'dva';
import WrappedVendorForm from '../../../components/EditForm/devVendorForm'
import  config  from 'utils/config';


const tableList =(props)=>{
    const {dispatch,basicData}=props
    const {vendorListData,modalVisible}=basicData
    const columns = [
        {
            title: '头像',
            dataIndex: 'logo',
            render:()=>(<Avatar src={config.people} />)
            // render: (v1,v2,v3) =><img src={config.logoPic+v2.vendorPic} width="120"/>,
        }, 
        {
            title: '姓名',
            dataIndex: 'name',
        }, 
        {
            title: '工号',
            dataIndex: 'workNumber',
        },
        {
            title: '职称',
            dataIndex: 'title',
        },
        {
            title: '入职时间',
            dataIndex: 'entryTime',
        },
        {
            title: '所属部门',
            dataIndex: 'ownedDepartment',
        },
        {
            title: '操作',
            key: 'action',
            width:350,
            render:(text, record, index)=>(
              <div style={{display:'flex','justifyContent': 'space-between'}}>
                <Button icon="edit" onClick={showModal.bind(this,record)}>编辑</Button>
                <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                  <Button type="danger" icon="delete">删除</Button>
                </Popconfirm>
                <Button icon="info-circle" type="primary" onClick={toggleInfo}>详情</Button>
              </div>
            )
        }
    ];
    let workerData=()=>{
        let data=[];
        for (var index = 0; index < 20; index++) {
            data.push({
                key:index,
                logo:'',
                name:'李铁柱',
                workNumber:`WN-00${1+index}`,
                title:'搬砖工',
                entryTime:'2017-09-27',
                ownedDepartment:'搬砖一部'
            })
        }
        return data;
    }
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
        // console.log(record);
        dispatch({
            type:'basicData/toggleModal',
            editData:record,
            dataPath:'vendorEditData'
        })
    }
    const toggleInfo = ()=>{
        dispatch({
            type:'basicData/toggleInfo',
        })
    }
    const handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    // const datasouse=workerData();
    return(
        <div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={workerData()} />
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
    };
  }
export default connect(mapStateToProps)(tableList);
// export default tableList;
