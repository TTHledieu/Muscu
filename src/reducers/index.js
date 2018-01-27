import { combineReducers } from 'redux';
import * as sportsReducer from './sport'

export default combineReducers(Object.assign(
    sportsReducer,
));