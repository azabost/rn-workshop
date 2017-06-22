import * as React from 'react';
import { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, ViewStyle } from 'react-native';
import { UpdateTextAction, downloadData, Issue } from './startActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../AppState'
import { Action } from '../Action'
import List from '../List/List'

interface Props {
    text: string
    issues?: [Issue]
    updateText: (string) => void
    downloadData: () => void
}

export class Start extends Component<Props, void> {

    updateText() {
        this.props.downloadData()
        console.log('Update')
    }

    downloaDataButton() {
        return (
            <TouchableHighlight>
                <Text onPress={this.updateText.bind(this)}>
                    Download data
                </Text>
            </TouchableHighlight>
        )
    }

    issueTitles(): [string] {
        const titles = this.props.issues.map((issue: Issue) => {
            return issue.title
        }) as [string]
        return titles
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.props.issues && this.downloaDataButton()}
                {this.props.issues && <List items={this.issueTitles()} />}
            </View>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {
        text: state.startState.text,
        issues: state.startState.issues
    }
}

function mapDispatchToProps(dispatch: (Action) => void, ownProps: any) {
    return {
        updateText: bindActionCreators(UpdateTextAction, dispatch),
        downloadData: bindActionCreators(downloadData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle
});
