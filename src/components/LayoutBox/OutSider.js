// import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import  './outside.css';


const OutSiderNav = ()=>{
    return(
        <Sider 
        trigger={null}
        collapsible
        collapsed={true}
        style={{ background: '#fff'}}>
            <Menu 
            theme="dark" 
            mode="inline" 
            defaultSelectedKeys={['1']}
            style={{minHeight:885}}
            >
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">nav 3</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
OutSiderNav.propTypes={}
export default OutSiderNav;