import React from 'react';
import { Table, Button ,Popconfirm,message,Modal,Form, Input, DatePicker, Col} from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item;
import WrappedFactoryForm from '../../components/EditForm/factoryForm'
// console.log(WrappedFactoryForm)
const DevModel = function ({dispatch, basicData}) {
  // console.log(basicData);
  const { devModelData,modalVisible }=basicData;
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
      type:'factoryList/toggleModal',
      editData:record
    })
  }
  const handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };
  const columns = [
    {
      title: '设备图片',
      dataIndex: 'age',
      key: 'age',
      render: text => <img src="../assets/img/plant1.7e6c59c.jpg"/>,
    }, 
    {
      title: '型号',
      dataIndex: 'modelName',
      key: 'modelName',
      width:250
    }, 
    {
      title: '设备名称',
      dataIndex: 'categoryName',
      key: 'categoryName',
      width:200
    },
    {
      title: '设备厂商',
      dataIndex: 'vendorName',
      key: 'vendorName',
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

  return (
    <div>
      <p style={{borderBottom:'solid 2px #b7b5b3',marginBottom:'30px',fontSize:'25px'}}>设备型号</p>
      <Button type="primary" icon="plus" onClick={showModal} style={{marginBottom:'20px'}}>添加型号</Button>
      <Table columns={columns} dataSource={devModelData} />
      <Modal
        visible={modalVisible}
        title="工厂编辑"
        onOk={handleOk}
        onCancel={showModal}
        footer={null}
      >
        <WrappedFactoryForm {...basicData}/>
      </Modal>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  console.log('basic',state)
  return {
    factoryList: state.factoryList,
    basicData:state.basicData
  };
}
export default connect(mapStateToProps)(DevModel);