import { Action } from '../Action'
import { UPDATE_TEXT, ISSUES_DOWNLOADED } from './StartTypes'
import { Actions } from 'react-native-router-flux'
export class UpdateTextPayload {
    text: string
    constructor(text: string) {
        this.text = text
    }
}

export function UpdateTextAction(text: string): Action<UpdateTextPayload> {
    Actions.app()
    return {
        type: UPDATE_TEXT,
        payload: new UpdateTextPayload(text)
    }

}

export class DownloadIssuesPayload {
    constructor(public issues: [Issue]) {}
}

export class Issue {
    constructor(public title: string) { }
}

export function downloadData() {
    return async (dispatch) => {
        const url = 'https://api.github.com/repos/facebook/react-native/issues?state=open'
        const response = await fetch(url, 'GET')
        const responseJSON = await response.json()
        const issues = responseJSON.map((object) => {
            return new Issue(object.title)
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