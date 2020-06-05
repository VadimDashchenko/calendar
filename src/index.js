import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/index';

const store = createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
