import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
import { Switch, Router, Route, IndexRoute ,routerRedux ,Redirect } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const homePage=()=>{

    return(
        <div style={{width:'100%'}}>
            <Layout style={{ padding: '0 24px 24px',minHeight:'880px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    这是主页
                    
                </Content>
            </Layout>
        </div>
    )
}
export default homePage;