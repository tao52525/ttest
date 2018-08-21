import ReactDOM from 'react-dom';

import getRouter from './router/router'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(getRouter(), document.getElementById('root'));
registerServiceWorker();
