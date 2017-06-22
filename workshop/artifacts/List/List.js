import * as React from 'react';
import { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
export default class List extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const rows = this.props.items != undefined ? this.props.items : [];
        this.state = {
            dataSource: ds.cloneWithRows(rows),
        };
    }
    renderRow(data) {
        return (React.createElement(View, { style: styles.row, key: data },
            React.createElement(Text, { style: styles.rowText }, data)));
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            !this.props.items && React.createElement(Text, { style: styles.listView }, " Im empty "),
            React.createElement(ListView, { style: styles.listView, dataSource: this.state.dataSource, renderRow: this.renderRow.bind(this) })));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listView: {
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 100
    },
    row: {
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'center'
    },
    rowText: {
        alignSelf: 'center'
    }
});
//# sourceMappingURL=List.js.map