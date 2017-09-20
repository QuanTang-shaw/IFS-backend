import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Icon ,Button } from 'antd';

const columns = [{
    title: '图片',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: '名称',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },{
    title: '联系方式',
    // dataIndex: 'address',
    key: 'contact',
  },{
    title: '建筑信息',
    // dataIndex: 'address',
    key: 'buildingInfo',
    render:()=>(
      <div>
        <p>面积:</p>
        <p>厂房数:</p>
      </div>
    )
  },{
    title: '生产信息',
    // dataIndex: 'address',
    key: 'produceInfo',
    render:()=>(
      <div>
        <p>主要产品:</p>
        <p>年产量:</p>
      </div>
    )
  },{
    title: '操作',
    key: 'action',
    render:()=>(
      <div>
        <Button icon="edit">编辑</Button>
        <Button type="danger" icon="delete">删除</Button>
      </div>
    )
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];

class factorylist extends Component {
    state = {  }
    render() {
        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}

export default factorylist;