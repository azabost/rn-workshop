import * as Types from './StartTypes';
const DEFAULT_STATE = {
    text: 'Default value'
};
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case Types.UPDATE_TEXT:
            const updateTextAction = action;
            return {
                text: updateTextAction.payload.text
            };
        default:
            return state;
    }
}
//# sourceMappingURL=startReducer.js.map