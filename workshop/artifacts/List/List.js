import * as React from 'react';
import { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import ListRow from './ListRow';
export default class List extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const rows = this.props.items || [];
        this.state = {
            dataSource: ds.cloneWithRows(rows),
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            !this.props.items && React.createElement(Text, { style: styles.listView }, " Im empty "),
            React.createElement(ListView, { style: styles.listView, dataSource: this.state.dataSource, renderRow: ListRow })));
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
        alignSelf: 'stretch'
    }
});
//# sourceMappingURL=List.js.map