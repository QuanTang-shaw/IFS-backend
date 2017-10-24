import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createBrowserHistory';
import './index.html';
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
app.model(require('./models/basicData'));
// app.model(require('./models/factory'));
// app.model(require('./models/workshop'));
// app.model(require('./models/machine'));
// app.model(require('./models/device'));
// app.model(require('./models/devcategory'));
// app.model(require('./models/vendor'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
