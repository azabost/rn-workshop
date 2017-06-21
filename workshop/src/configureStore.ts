import { createStore, compose, applyMiddleware, Store } from 'redux'
import * as Redux from 'redux'
import mainReducer from './mainReducer'
import { AppState } from './AppState'

export default function configureStore(initialState: AppState = undefined): Store<any> {    
    const enhancer = compose(        
    )
    return createStore(mainReducer, initialState, enhancer)
}