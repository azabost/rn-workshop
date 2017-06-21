import { Action } from '../Action'
import { UPDATE_TEXT } from './StartTypes'

export class UpdateTextPayload {
    text: string
    constructor(text: string) {
        this.text = text
    }
}

export function UpdateTextAction(text: string): Action<UpdateTextPayload> {
    return {
        type: UPDATE_TEXT,
        payload: new UpdateTextPayload(text)
    }

}