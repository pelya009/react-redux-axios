import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';
//import { getUsers } from '../actions';


const store = createStore(reducer, applyMiddleware(thunk));

//store.dispatch(getUsers)


export default store;