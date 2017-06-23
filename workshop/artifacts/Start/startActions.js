var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UPDATE_TEXT, ISSUES_DOWNLOADED } from './StartTypes';
import { Actions } from 'react-native-router-flux';
export function UpdateTextAction(text) {
    Actions.app();
    return {
        type: UPDATE_TEXT,
        payload: new UpdateTextPayload(text)
    };
}
export class UpdateTextPayload {
    constructor(text) {
        this.text = text;
    }
}
export class DownloadIssuesPayload {
    constructor(issues) {
        this.issues = issues;
    }
}
export class Issue {
    constructor(title, avatarUrl) {
        this.title = title;
        this.avatarUrl = avatarUrl;
    }
}
export function downloadData() {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        const url = 'https://api.github.com/repos/facebook/react-native/issues?state=open';
        const response = yield fetch(url, 'GET');
        const responseJSON = yield response.json();
        const issues = responseJSON.map((object) => {
            return new Issue(object.title, object.user.avatar_url);
        });
        dispatch(downloadedAction(issues));
    });
}
const downloadedAction = (issues) => {
    return {
        type: ISSUES_DOWNLOADED,
        payload: new DownloadIssuesPayload(issues)
    };
};
//# sourceMappingURL=startActions.js.map