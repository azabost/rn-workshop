import {combineReducers} from 'redux'
import startReducer from './Start/startReducer'

export default combineReducers({
    startState: startReducer
})