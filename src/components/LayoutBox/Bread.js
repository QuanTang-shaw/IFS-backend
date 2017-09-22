import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

const Bread = ()=>{
    return(
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}

Bread.propTypes={}
export default Bread;