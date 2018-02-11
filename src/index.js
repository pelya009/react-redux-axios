import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import users from './users';
//import { addUser, deleteUser, editUser} from './actions';

const store = createStore(reducer, users);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
