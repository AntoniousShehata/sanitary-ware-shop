import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Use this if the first import works

// Or try:
// import thunk from 'redux-thunk';  // Use this if the second import works

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
