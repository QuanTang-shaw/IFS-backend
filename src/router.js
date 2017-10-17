import React from 'react';
import { Switch, Router, Route, IndexRoute ,routerRedux ,Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import IndexPage from './routes/IndexPage';
import App from './routes/app';
import factoryList from './routes/factory/factoryList/factoryList';
import machineList from './routes/machine/machineList';
import factoryMap from './routes/factory/factoryMap/factoryMap';
import workshopMG from './routes/workshop/workshopList';
import devModel from './routes/deviceModel/main';
import devVendor from './routes/vendor/devVendor';
import devList from './routes/deviceList/deviceList';
import homePage from './routes/home/homepage';
import basicData from './routes/basic/basicData';
import productMonitor from './routes/monitor/proMonitor';
import DataAnalysis from './routes/analysis/dataAnalysis';
// import example from './models/example'
const { ConnectedRouter } = routerRedux;
function RouterConfig({ history, app }) {

  /*  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRoute component={factoryMG} />
        <Route path="/factory" component={factoryMG}>
          <IndexRoute component={factoryList} />
          <Route path="/factoryList" component={factoryList} />
          <Route path="/factoryMap" component={factoryMap} />
        </Route>
        <Route path="/workshopManagement" component={workshopMG} />
      </Route>
    </Router>
  );  */
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/homepage" />)} />
          <Route path="/homepage" component={homePage}/>
          <Route path="/basicData" component={basicData}/>
            {/* <IndexRoute component={factoryList} />
            <Route path="/factory"  component={factoryList} />
            <Route path="/workshop" component={workshopMG} />
            <Route path="/machine" component={machineList} />
            <Route path="/devcategory" component={devModel} />
            <Route path="/dev-vendor" component={devVendor} />
            <Route path="/devicelist" component={devList} />
           */}
          <Route path="/productMonitor" component={productMonitor}/>
          <Route path="/dataAnalysis" component={DataAnalysis}/>
        </Switch>
      </App>
    </ConnectedRouter> 
  );
}
export default RouterConfig;
