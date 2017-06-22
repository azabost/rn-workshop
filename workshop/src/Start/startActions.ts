import { Action } from '../Action'
import { UPDATE_TEXT, FETCH_GITHUB } from './StartTypes'
import { Actions } from 'react-native-router-flux'
import { Issue } from './StartScreen'

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

export class FetchGithubPayload {
    items: [Issue]
    constructor(items: [Issue]) {
        this.items = items
    }
}

export function FetchGithubAction(items: [Issue]): Action<FetchGithubPayload> {
    return {
        type: FETCH_GITHUB,
        payload: new FetchGithubPayload(items)
    }
}

export function fetchGithub() {
    return async (dispatch: any) => {
        try {
            console.info("Fetching github...")
            var response = await fetch('https://api.github.com/repos/facebook/react-native/issues?state=open')
            var responseJSON = await response.json() 
            var issues = responseJSON.map(function mapToIssues(issue) {
                var id = issue.id
                var title = issue.title
                return new Issue(id, title)
            })
            console.info("Fetched from github:", issues)
            dispatch(FetchGithubAction(issues))
        } catch (error) {
            console.error(error)
        }
    }
}