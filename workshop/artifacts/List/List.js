import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class List extends Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, " text ")));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
//# sourceMappingURL=List.js.map