import React from 'react';
import { Switch, Router, Route, IndexRoute ,routerRedux ,Redirect } from 'dva/router';
// import dynamic from 'dva/dynamic';

/* import IndexPage from './routes/IndexPage';
import factoryList from './routes/factory/factoryList/factoryList';
import machineList from './routes/machine/machineList';
import factoryMap from './routes/factory/factoryMap/factoryMap';
import workshopMG from './routes/basic/workshop/workshopList';
import devModel from './routes/deviceModel/main';
import devVendor from './routes/vendor/devVendor';
import devList from './routes/deviceList/deviceList'; */

import App from './routes/app';
import homePage from './routes/home/homepage';
import basicData from './routes/basic/basicData';
import productMonitor from './routes/monitor/proMonitor';
import DataAnalysis from './routes/analysis/dataAnalysis';
// import example from './models/example'
const { ConnectedRouter } = routerRedux;
function RouterConfig({ history, app }) {

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/homepage" />)} />
          <Route path="/homepage" component={homePage}/>
          <Route path="/basicData" component={basicData}/>
          <Route path="/productMonitor" component={productMonitor}/>
          <Route path="/dataAnalysis" component={DataAnalysis}/>
        </Switch>
      </App>
    </ConnectedRouter> 
  );
}
export default RouterConfig;
