import { UPDATE_TEXT } from './StartTypes';
export class UpdateTextPayload {
    constructor(text) {
        this.text = text;
    }
}
export function UpdateTextAction(text) {
    return {
        type: UPDATE_TEXT,
        payload: new UpdateTextPayload(text)
    };
}
//# sourceMappingURL=startActions.js.map