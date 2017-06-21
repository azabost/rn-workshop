import { Action } from '../Action'
import * as Types from './StartTypes'
import { UpdateTextPayload } from './startActions'
export interface StartState {
    text: string
}

const DEFAULT_STATE: StartState = {
    text: 'Default value'
}

export default function (state: StartState = DEFAULT_STATE, action: Action<any>): StartState {
    switch (action.type) {
        case Types.UPDATE_TEXT:
            const updateTextAction = action as Action<UpdateTextPayload>
            return {
                text: updateTextAction.payload.text
            }
        default:
            return state
    }
}