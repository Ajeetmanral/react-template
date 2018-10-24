import { combineReducers } from 'redux';
import AppReducer from './app';

const rootReducer = combineReducers({ App: AppReducer });

export default rootReducer;
