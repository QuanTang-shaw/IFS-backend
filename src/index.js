import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import './index.css';
// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  // history: createHistory(),
});

// 2. Plugins
// app.use({});
// 3. Model
app.model(require('./models/app'));
app.model(require('./models/factory'));
app.model(require('./models/workshop'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
