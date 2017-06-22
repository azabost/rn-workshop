import { Action } from '../Action'
import { UPDATE_TEXT, FETCH_GITHUB } from './StartTypes'
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

export class FetchGithubPayload {
    json: string
    constructor(json: string) {
        this.json = json
    }
}

export function FetchGithubAction(json: any): Action<FetchGithubPayload> {
    return {
        type: FETCH_GITHUB,
        payload: new FetchGithubPayload(json)
    }
}

export function fetchGithub() {
    return async (dispatch: any) => {
        try {
            console.info("Fetching github...")
            var response = await fetch('https://api.github.com/repos/facebook/react-native/issues?state=open')
            var responseJSON = await response.json()
            console.info("Fetched from github:", responseJSON)
            dispatch(FetchGithubAction(responseJSON))
        } catch (error) {
            console.error(error)
        }
    }
}