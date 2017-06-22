import { Action } from '../Action'
import * as Types from './StartTypes'
import { Issue } from './StartScreen'
import { UpdateTextPayload, FetchGithubAction, FetchGithubPayload } from './startActions'

export interface StartState {
    items?: [Issue]
}

const DEFAULT_STATE: StartState = {
}

export default function (state: StartState = DEFAULT_STATE, action: Action<any>): StartState {
    switch (action.type) {
        case Types.UPDATE_TEXT:
            const updateTextAction = action as Action<UpdateTextPayload>
            return {
                ...state,
                text: updateTextAction.payload.text
            }
        case Types.FETCH_GITHUB:
            const fetchGithubAction = action as Action<FetchGithubPayload>
            return {
                ...state,
                items: fetchGithubAction.payload.items
            }
        default:
            return state
    }
}