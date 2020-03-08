import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import reducer from './reducers';
const middleware = process.env.ENV_NAME === 'dev' ? applyMiddleware(promise, logger) : applyMiddleware(promise);
const store = middleware(createStore)(reducer)
export default store;