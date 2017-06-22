import * as React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
export default function listRow(issue) {
    return (React.createElement(TouchableHighlight, { style: styles.row, key: issue.title, onPress: () => {
            console.log(issue.title);
        } },
        React.createElement(View, { style: styles.container },
            React.createElement(Image, { style: styles.image, source: { uri: issue.avatarUrl } }),
            React.createElement(Text, null, issue.title))));
}
const styles = StyleSheet.create({
    row: {
        height: 100,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    rowText: {
        marginTop: 10,
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    bottomRow: {
        marginBottom: 10,
        backgroundColor: 'green',
        alignSelf: 'center',
    },
    image: {
        marginTop: 10,
        borderRadius: 35,
        alignSelf: 'center',
        backgroundColor: 'blue',
        height: 70,
        width: 70
    }
});
//# sourceMappingURL=ListRow.js.map