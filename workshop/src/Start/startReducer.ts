import { Action } from '../Action'
import * as Types from './StartTypes'
import { UpdateTextPayload, Issue, DownloadIssuesPayload } from './startActions'

export interface StartState {
    text: string
    issues?: [Issue]
}

const DEFAULT_STATE: StartState = {
    text: 'Default value',
    issues: undefined
}

type ReducerPayloads = DownloadIssuesPayload | UpdateTextPayload

export default function (state: StartState = DEFAULT_STATE, action: Action<ReducerPayloads>): StartState {
    switch (action.type) {
        case Types.UPDATE_TEXT:
            const updateTextAction = action as Action<UpdateTextPayload>
            return {
                ...state,
                text: updateTextAction.payload.text
            }
        case Types.ISSUES_DOWNLOADED:
            const issuesAction = action as Action<DownloadIssuesPayload>
            return {
                ...state,
                issues: issuesAction.payload.issues
            }
        default:
            return state
    }
}