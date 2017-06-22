import * as React from 'react';
import { Component } from 'react'
import { View, Text, ListView, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { UpdateTextAction, fetchGithub } from './startActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../AppState'
import { Action } from '../Action'

interface Props {
    items?: [string]
    json?: any
    fetch: () => void
}

interface State {
    dataSource: any
}

export class Start extends Component<Props, State> {

    constructor(props) {
        super(props);
        console.info("Props json:", this.props.json)

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        const rows = []
        this.state = {
            dataSource: ds.cloneWithRows(rows),
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        let rows = nextProps.json
        this.setState((previousState: State) => ({
                dataSource: previousState.dataSource.cloneWithRows(rows)
        }))
    }

    renderRow(data: any) {
        return (
            <View style={styles.row} key={data.id}>
                <Text style={styles.rowText}>{data.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>                
                {!this.props.json && <Text style={styles.listView}> Im empty </Text>}
                <ListView style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)} />
            </View>
        )
    }

    componentDidMount() {
        this.props.fetch()
    }
}

function mapStateToProps(state: AppState) {
    return {
        text: state.startState.text,
        json: state.startState.json
    }
}

function mapDispatchToProps(dispatch: (Action) => void, ownProps: any) {
    return {
        fetch: bindActionCreators(fetchGithub, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start)

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
