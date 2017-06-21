import { UPDATE_TEXT } from './StartTypes';
import { Actions } from 'react-native-router-flux';
export class UpdateTextPayload {
    constructor(text) {
        this.text = text;
    }
}
export function UpdateTextAction(text) {
    Actions.app();
    return {
        type: UPDATE_TEXT,
        payload: new UpdateTextPayload(text)
    };
}
//# sourceMappingURL=startActions.js.map