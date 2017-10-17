import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
// import styles from './Sider.css';


const SiderNav = ()=>{
    return(
        <Sider width={200} style={{ background: '#fff' }}>
            <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            >
            <SubMenu key="sub1" title={<span><Icon type="user" />资产管理</span>}>
                <Menu.Item key="1">
                <Link to="/factory">
                    工厂管理
                </Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link to="/workshop">
                    车间管理
                </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/machine">
                        机台管理
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/devcategory">
                        设备类别
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/dev-vendor">
                        设备厂商
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/devicelist">
                        设备列表
                    </Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />物料管理</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />客户管理</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>
    )
}
SiderNav.propTypes={}
export default SiderNav;