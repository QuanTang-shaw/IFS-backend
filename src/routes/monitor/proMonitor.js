import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
import { Switch, Router, Route, IndexRoute ,routerRedux ,Redirect } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import machineLine from './workCenter/proMachineLine';
import packingLine from './workCenter/packingLine';
// import factoryList from '../factory/factoryList/factoryList';
// import machineList from '../machine/machineList';
// import factoryMap from '../factory/factoryMap/factoryMap';
// import workshopMG from '../basic/workshop/workshopList';
// import devModel from '../deviceModel/model';
// import devVendor from '../vendor/devVendor';
// import devList from '../deviceList/deviceList';
const productMonitor=(props)=>{
    console.log(props)
    const {match}=props
    return(
        <div style={{  width:'100%',display:'flex' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    >
                    <SubMenu key="sub1" title={<span><Icon type="user" />工作中心</span>}>
                        <Menu.Item key="1">
                        <Link to="/productMonitor/machineline">
                            机械加工线
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Link to="/productMonitor/packingline">
                            包装线
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/productMonitor/machine">
                                焊接线
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />生产看板</span>}>
                        <Menu.Item key="7">设备品牌</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <Route path={`${match.url}/machineline`} component={machineLine} />
                    <Route path={`${match.url}/packingline`} component={packingLine} />
                </Content>
            </Layout>
        </div>
    )
}
export default productMonitor;