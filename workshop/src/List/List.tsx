import * as React from 'react'
import { Component } from 'react'
import { View, Text, ListView, StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Props {
    items?: [string]
}

interface State {
    dataSource: any
}

export class List extends Component<Props, State> {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const rows = this.props.items != undefined ? this.props.items : []
        this.state = {
            dataSource: ds.cloneWithRows(rows),
        };
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                const rows = responseJson
                console.debug("Fetched: ", rows)
                this.setState((previousState: State) => ({
                    dataSource: previousState.dataSource.cloneWithRows(rows)
                }))
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderRow(data: string) {
        return (
            <View style={styles.row} key={data}>
                <Text style={styles.rowText}>{data}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.props.items && <Text style={styles.listView}> Im empty </Text>}
                <ListView style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)} />
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
    } as ViewStyle,
    row: {
        height: 40,
        backgroundColor: 'green',
        alignItems: 'center'
    } as ViewStyle,
    rowText: {
        alignSelf: 'center'
    } as TextStyle
});
