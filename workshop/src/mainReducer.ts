import {combineReducers} from 'redux'
import startReducer from './Start/startReducer'
import navigationReducer from './navigationReducer'

export default combineReducers({
    startState: startReducer,
    navigationState: navigationReducer
})