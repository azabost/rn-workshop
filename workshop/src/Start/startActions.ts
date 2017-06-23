import { Action } from '../Action'
import { UPDATE_TEXT, ISSUES_DOWNLOADED } from './StartTypes'
import { Actions } from 'react-native-router-flux'


export function UpdateTextAction(text: string): Action<UpdateTextPayload> {
    Actions.app()
    return {
        type: UPDATE_TEXT,
        payload: new UpdateTextPayload(text)
    }

}

export class UpdateTextPayload {
    constructor(public text: string) { }
}

export class DownloadIssuesPayload {
    constructor(public issues: [Issue]) { }
}

export class Issue {
    constructor(public title: string, public avatarUrl: string) { }
}

export function downloadData() {
    return async (dispatch) => {
        const url = 'https://api.github.com/repos/facebook/react-native/issues?state=open'
        const response = await fetch(url, 'GET')
        const responseJSON = await response.json()
        const issues = responseJSON.map((object) => {
            return new Issue(object.title, object.user.avatar_url)
        })
        dispatch(downloadedAction(issues))
    }
}

const downloadedAction = (issues: [Issue]) => {
    return {
        type: ISSUES_DOWNLOADED,
        payload: new DownloadIssuesPayload(issues)
    }
}