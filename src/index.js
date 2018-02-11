import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { getUsers } from './actions';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => store.dispatch(getUsers(users)));

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
