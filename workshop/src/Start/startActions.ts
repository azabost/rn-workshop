import { Action } from '../Action'
import { UPDATE_TEXT } from './StartTypes'
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