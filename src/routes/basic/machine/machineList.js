import { Table,Button,Popconfirm,message,Modal,Form, Input, DatePicker, Col } from 'antd';
import { connect } from 'dva';

import WrappedMachineForm from '../../../components/EditForm/machineForm'
const machineList =(props)=>{
    const {dispatch,machineList,basicData}=props
    const {machineTableData,modalVisible}=basicData
    const columns = [
        {
            title: '机台编号',
            dataIndex: 'numbering',
            // render: text => <a href="#">{text}</a>,
        },
        {
            title: '机台名称',
            dataIndex: 'name',
        }, 
        {
            title: '机台主管',
            dataIndex: 'principal',
        },
        {
            title: '机台类型',
            dataIndex: 'machineType',
        },
        {
            title:'车间操作',
            width:300,
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
            dataPath:'machineEditData'
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
            <p style={{borderBottom:'solid 2px #b7b5b3',marginBottom:'30px',fontSize:'25px'}}>机台管理</p>
            <Table rowSelection={rowSelection} columns={columns} dataSource={machineTableData} />
            <Modal
                visible={modalVisible}
                title="工厂编辑"
                onOk={handleOk}
                onCancel={showModal}
                footer={null}
            >
                <WrappedMachineForm {...basicData}/>
            </Modal>
        </div>
    )
}
function mapStateToProps(state, ownProps) {
    return {
        basicData:state.basicData,
        // machineList: state.machinelist,
    };
  }
export default connect(mapStateToProps)(machineList);
