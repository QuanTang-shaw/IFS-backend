import React from 'react';
import { Table, Button ,Popconfirm,message,Modal,Form, Input, DatePicker, Col} from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item;
import WrappedFactoryForm from '../../../components/EditForm/factoryForm'
// console.log(WrappedFactoryForm)
const factorylist = function (props) {
  // const pic=require('./assets/img/plant1.7e6c59c');
  console.log(props);
  const {dispatch, factoryList,basicData}=props
  const { factoryTableData,modalVisible}=basicData;
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
      dataPath:'factoryEditData'
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
      title: '图片',
      dataIndex: 'age',
      key: 'age',
      render: text => <img src="../assets/img/plant1.7e6c59c.jpg"/>,
    }, 
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    }, 
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      width:200
    },
    {
      title: '联系方式',
      dataIndex: 'contact',
      key: 'contact',
    },
    {
      title: '建筑信息',
      dataIndex: 'buildingInfo',
      key: 'buildingInfo',
      render:(name,value,index)=>(
        <div>
          {/* console.log(value) */}
          <p>面积:{value.buildingInfo.area}</p>
          <p>厂房数:{value.buildingInfo.number}</p>
        </div>
      )
    },
    {
      title: '生产信息',
      // dataIndex: 'address',
      key: 'produceInfo',
      render:(name,value,index)=>(
        <div>
          {/* {console.log(value)} */}
          <p>主要产品:{value.productInfo.main}</p>
          <p>年产量:{value.productInfo.yield}</p>
        </div>
      )
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
      <p style={{borderBottom:'solid 2px #b7b5b3',marginBottom:'30px',fontSize:'25px'}}>工厂管理</p>
      <Button type="primary" icon="plus" onClick={showModal} style={{marginBottom:'20px'}}>添加工厂</Button>
      <Table columns={columns} dataSource={factoryTableData} />
      <Modal
        visible={modalVisible}
        title="工厂编辑"
        onOk={handleOk}
        onCancel={showModal}
        footer={null}
        >
        {/* footer={[
          <Button key="back" size="large" onClick={showModal}>取消</Button>,
          <Button key="submit" type="primary" size="large" loading={modalLoading} onClick={handleOk}>
            提交
          </Button>,
        ]} */}
        <WrappedFactoryForm {...basicData}/>
      </Modal>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    basicData: state.basicData,
    // factoryList: state.factoryList
  };
}
export default connect(mapStateToProps)(factorylist);