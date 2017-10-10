import { combineReducers } from 'redux'
import * as stuffsReducer from './stuffs'

export default combineReducers(Object.assign(
    stuffsReducer,
))