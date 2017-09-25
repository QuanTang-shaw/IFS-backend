import React from 'react';
import { Table, Button ,Popconfirm,message} from 'antd';
import { connect } from 'dva';

const factorylist = function ({dispatch, factoryList}) {
  // console.log(factoryList);
  // const pic=require('./assets/img/plant1.7e6c59c');
  // console.log(pic)
  const { factoryTableData }=factoryList;
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

  const columns = [
    {
      title: '图片',
      dataIndex: 'age',
      key: 'age',
      render: text => <img src="./assets/img/plant1.7e6c59c.jpg"/>,
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
          {/* {console.log(value)} */}
          <p>面积:{value.buildingInfo.area}</p>
          <p>厂房数:{value.buildingInfo.number}</p>
        </div>
      )
    },
    {
      title: '生产信息',
      // dataIndex: 'address',
      key: 'produceInfo',
      render:()=>(
        <div>
          <p>主要产品:</p>
          <p>年产量:</p>
        </div>
      )
    },
    {
      title: '操作',
      key: 'action',
      render:(text, record, index)=>(
        <div>
          <Button icon="edit">编辑</Button>
          <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
            <Button type="danger" icon="delete">删除</Button>
          </Popconfirm>
        </div>
      )
    }
  ];

  return (
    <Table columns={columns} dataSource={factoryTableData} />
  );
}
function mapStateToProps(state, ownProps) {
  // console.log(state)
  // console.log(ownProps)
  return {
    factoryList: state.factoryList
  };
}
export default connect(mapStateToProps)(factorylist);
// export default factorylist;