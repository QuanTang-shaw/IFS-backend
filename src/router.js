import React from 'react';
import { Switch, Router, Route, IndexRoute ,routerRedux ,Redirect } from 'dva/router';
const { ConnectedRouter } = routerRedux;
// import dynamic from 'dva/dynamic';
// import example from './models/example'
import App from './routes/app';
import homePage from './routes/home/homepage';
import basicData from './routes/basic/basicData';
import productMonitor from './routes/monitor/proMonitor';
import DataAnalysis from './routes/analysis/dataAnalysis';
import test from 'routes/basic/basicData';
console.log('测试一下',test);

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
