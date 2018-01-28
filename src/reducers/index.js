import { combineReducers } from 'redux';
import * as selectReducer from './select'

export default combineReducers(Object.assign(
    selectReducer,
));