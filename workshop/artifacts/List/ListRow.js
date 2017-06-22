import * as React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
export default function listRow(data) {
    return (React.createElement(TouchableHighlight, { style: styles.row, key: data, onPress: () => {
            console.log('tets');
        } },
        React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.rowText }, data),
            React.createElement(Text, { style: styles.bottomRow }, data))));
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
    }
});
//# sourceMappingURL=ListRow.js.map