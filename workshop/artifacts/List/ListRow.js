import * as React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
export default function listRow(issue) {
    return (React.createElement(TouchableHighlight, { style: [styles.row], key: issue.title, onPress: () => { } },
        React.createElement(View, { style: styles.container },
            React.createElement(Image, { style: styles.image, source: { uri: issue.avatarUrl } }),
            React.createElement(Text, { style: styles.rowText },
                issue.title,
                issue.title,
                issue.title,
                issue.title))));
}
const styles = StyleSheet.create({
    row: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    rowText: {
        alignSelf: 'center',
    },
    bottomRow: {
        marginBottom: 10,
        backgroundColor: 'green',
        alignSelf: 'center',
    },
    image: {
        borderRadius: 25,
        marginLeft: 20,
        marginRight: 10,
        alignSelf: 'center',
        backgroundColor: 'blue',
        height: 50,
        width: 50
    }
});
//# sourceMappingURL=ListRow.js.map