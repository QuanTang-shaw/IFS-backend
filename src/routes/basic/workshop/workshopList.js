import { Table, Button ,Popconfirm,message,Modal,Form, Input, DatePicker, Col,Avatar,Popover} from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item;
import WrappedWorkshopForm from '../../../components/EditForm/workshopForm'
import  config  from 'utils/config';

const workshopList = function(props){
  const {dispatch, workshopList,basicData}=props
  const {workshopTableData ,selectedRowKeys ,loading,modalVisible}=basicData
  
  const showModal = (record,ev) => {
    // console.log(record);
    dispatch({
      type:'basicData/toggleModal',
      editData:record,
      dataPath:'workshopEditData'
    })
  }
  const handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
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
  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    // this.setState({ selectedRowKeys });
    dispatch({
      type:"workshop/select",
      selectedRowKeys
    })
  }
  const start =()=>{
    dispatch({
      type:"workshop/reload"
    })
  }
  const employeeInfo = (
    <div>
      <p>姓名:张全蛋</p>
      <p>年龄:28</p>
      <p>入职日期:2017年10月28日</p>
    </div>
  );
  const columns = [
    {
      title: '车间图片',
      dataIndex: 'pic',
      key: 'pic',
      render: text => <img src={config.workshopPic} width="120"/>,
    },
    {
        title: '车间编号',
        dataIndex: 'numbering',
    }, 
    {
        title: '车间名称',
        dataIndex: 'name',
    }, 
    {
        title: '车间主管',
        dataIndex: 'principal',
        // width:250,
        render:()=>(
          <Popover content={employeeInfo} title="员工信息" trigger="hover">
            <Avatar src={config.people} />
          </Popover>
        )
    },
    {
      title: '车间类型',
      dataIndex: 'workshopType',
      // width:150
    },
    {
      title:'车间操作',
      width:500,
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
    selectedRowKeys,
    onChange:onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <p style={{borderBottom:'solid 2px #b7b5b3',marginBottom:'30px',fontSize:'25px'}}>车间管理</p>
      <div style={{ marginBottom: 25 }}>
        <Button type="primary" onClick={start}
          disabled={!hasSelected} loading={loading}
        >批量操作</Button>
        <Button type="primary" icon="plus" 
          onClick={showModal} style={{marginLeft:30}}>添加车间</Button>
        <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={workshopTableData} />
      <Modal
        visible={modalVisible}
        title="车间编辑"
        onOk={handleOk}
        onCancel={showModal}
        footer={null}
        >
        <WrappedWorkshopForm {...basicData}/>
      </Modal>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    basicData:state.basicData,
    // workshopList: state.workshop
  }
}
export default connect(mapStateToProps)(workshopList);