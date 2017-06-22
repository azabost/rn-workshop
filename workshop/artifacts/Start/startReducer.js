import * as Types from './StartTypes';
const DEFAULT_STATE = {
    text: 'Default value',
    issues: undefined
};
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case Types.UPDATE_TEXT:
            const updateTextAction = action;
            return Object.assign({}, state, { text: updateTextAction.payload.text });
        case Types.ISSUES_DOWNLOADED:
            const issuesAction = action;
            return Object.assign({}, state, { issues: issuesAction.payload.issues });
        default:
            return state;
    }
}
//# sourceMappingURL=startReducer.js.map