import React from 'react';
import ReactDOM from 'react-dom';

import getRouter from './router/router'
import {Provider} from 'react-redux'
import store from './redux/store'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    {getRouter()}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
