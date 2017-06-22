import { createStore, compose, applyMiddleware, Store } from 'redux'
import * as Redux from 'redux'
import mainReducer from './mainReducer'
import { AppState } from './AppState'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default function configureStore(initialState: AppState = undefined): Store<any> {    
    const enhancer = compose(   
        applyMiddleware(thunk, logger)     
    )
    return createStore(mainReducer, initialState, enhancer)
}