import { createStore, compose } from 'redux';
import mainReducer from './mainReducer';
export default function configureStore(initialState = undefined) {
    const enhancer = compose();
    return createStore(mainReducer, initialState, enhancer);
}
//# sourceMappingURL=configureStore.js.map