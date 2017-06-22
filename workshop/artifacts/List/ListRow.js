import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function listRow(data) {
    return (React.createElement(View, { style: styles.row, key: data },
        React.createElement(Text, { style: styles.rowText }, data)));
}
const styles = StyleSheet.create({
    row: {
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'stretch'
    },
    rowText: {
        alignSelf: 'center'
    }
});
//# sourceMappingURL=ListRow.js.map