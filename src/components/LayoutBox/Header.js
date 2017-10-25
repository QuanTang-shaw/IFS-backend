import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu,Dropdown, Breadcrumb, Icon, Input,Avatar} from 'antd';
const Search = Input.Search;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import  config  from 'utils/config'
import styles from './Header.css';
// const logo='/assets/TOP-STAR-LOGO.png';
// console.log('这是LOGO',config.logo);

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人信息</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出</a>
      </Menu.Item>
    </Menu>
);

const Head = ()=>{
    return(
        <Header className="header"  style={{backgroundColor:'white',borderBottom:'1px solid #e2e2e6'}}>
            <img alt={'logo'} src={config.logo} className={ styles.logo} />
            {/* <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
                >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
            <div className={ styles.headOper}>
                <Search
                    placeholder="输入点什么吧..."
                    style={{ width: 400 }}
                    onSearch={value => console.log(value)}
                />
                <Dropdown overlay={menu}>
                    <Avatar className={ styles.avatar} icon="user"/>
                </Dropdown>
            </div>
        </Header>
    )
}
Head.propTypes={}
export default Head;