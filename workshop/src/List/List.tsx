import * as React from 'react'
import { Component } from 'react'
import { View, Text, ListView, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import ListRow from './ListRow'

interface Props {
    items?: [string]
}

interface State {
    dataSource: any
}

export default class List extends Component<Props, State> {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        const rows = this.props.items || []         
        this.state = {
            dataSource: ds.cloneWithRows(rows),
        };
    }   

    render() {
        return (
            <View style={styles.container}>
                {!this.props.items && <Text style={styles.listView}> Im empty </Text>}
                <ListView style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={ListRow} />                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle,
    listView: {
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 100
    } as ViewStyle    
});
