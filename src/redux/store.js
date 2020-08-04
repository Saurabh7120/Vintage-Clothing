/* jshint esversion: 9*/
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';


const middlewares = [logger];


const store = createStore(rootReducer, applyMiddleware(...middlewares));

const Persistor = persistStore(store);

export default store;
export {Persistor};
