import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import factoryMG from './Pages/factory/factoryManagement';
import factoryList from './Pages/factory/factoryList/factoryList';
import factoryMap from './Pages/factory/factoryMap/factoryMap';
import workshopMG from './Pages/workshop/workshopList';

function RouterConfig({ history }) {
  return (
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
  );
}

export default RouterConfig;
