import * as React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
export default function listRow(data) {
    return (React.createElement(TouchableHighlight, { style: styles.row, key: data, onPress: () => {
            console.log('tets');
        } },
        React.createElement(Text, { style: styles.rowText }, data)));
}
const styles = StyleSheet.create({
    row: {
        height: 50,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    rowText: {
        alignSelf: 'center',
    }
});
//# sourceMappingURL=ListRow.js.map