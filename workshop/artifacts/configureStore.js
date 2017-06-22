import { createStore, compose, applyMiddleware } from 'redux';
import mainReducer from './mainReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export default function configureStore(initialState = undefined) {
    const enhancer = compose(applyMiddleware(thunk, logger));
    return createStore(mainReducer, initialState, enhancer);
}
//# sourceMappingURL=configureStore.js.map