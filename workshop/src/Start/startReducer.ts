import { Action } from '../Action'
import * as Types from './StartTypes'
import { UpdateTextPayload, FetchGithubAction, FetchGithubPayload } from './startActions'

export interface StartState {
    text: string,
    json?: any
}

const DEFAULT_STATE: StartState = {
    text: 'Default value',
    json: ''
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
                json: fetchGithubAction.payload.json
            }
        default:
            return state
    }
}