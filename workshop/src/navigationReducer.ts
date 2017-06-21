import { ActionConst } from 'react-native-router-flux';


const DEFAULT_STATE = { scene: {} }

export default function reducer(state: any = DEFAULT_STATE, action: any = {}) {

    switch (action.type) {
        case ActionConst.FOCUS:
            return {
                ...state,
                scene: action.scene
            }        
        default:
            return state
    }
}