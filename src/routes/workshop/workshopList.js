import { Table, Button,Popconfirm,message } from 'antd';
import { connect } from 'dva';


const workshopList = function({dispatch, workshopList}){
  // console.log(factoryList)
  /* start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  } */
  const columns = [
      {
          title: '车间编号',
          dataIndex: 'name',
      }, 
      {
          title: '车间名称',
          dataIndex: 'age',
      }, 
      {
          title: '车间主管',
          dataIndex: 'address',
          // width:250
      },
      {
        title: '车间类型',
        dataIndex: 'type',
        // width:150
      },
      {
        title:'车间操作',
        width:500,
        render:()=>(
          <div>
            <Button icon="edit">编辑</Button>
            <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
              <Button type="danger" icon="delete">删除</Button>
            </Popconfirm>
          </div>
        )
      }
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
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
  const { selectedRowKeys ,loading } =workshopList
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
  const rowSelection = {
    selectedRowKeys,
    onChange:onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start}
          disabled={!hasSelected} loading={loading}
        >Reload</Button>
        <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  console.log(state)
  // console.log(ownProps)
  return {
    workshopList: state.workshop
  };
}
export default connect(mapStateToProps)(workshopList);