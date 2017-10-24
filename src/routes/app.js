import React, { Component } from 'react';
// import { connect } from 'dva';
// import { Link } from 'dva/router';
import styles from './app.css';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const {  Content } = Layout;
import { Header, Bread, Sider,OutSider}  from '../components/LayoutBox/index';
// const { Header, Bread, Sider } = LayoutBox;

const App = ({children,app})=>{
    return(
        <Layout className={ styles.fullHeight}>
            <Header />
            <Layout className="ant-layout-has-sider" >
                <OutSider style={{minHeight:885}}/>
                {children}
                {/* <Sider />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Bread />
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {children}
                    </Content>
                </Layout> */}
            </Layout>
        </Layout>
    )
}

/* App.propTypes = {
}; */
export default App;
