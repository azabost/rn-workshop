import { ActionConst } from 'react-native-router-flux';
const DEFAULT_STATE = { scene: {} };
export default function reducer(state = DEFAULT_STATE, action = {}) {
    switch (action.type) {
        case ActionConst.FOCUS:
            return Object.assign({}, state, { scene: action.scene });
        default:
            return state;
    }
}
//# sourceMappingURL=navigationReducer.js.map