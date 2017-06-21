import * as React from 'react';
import { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, ViewStyle } from 'react-native';
import { UpdateTextAction } from './startActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../AppState'
import { Action } from '../Action'

interface Props {
    text: string
    updateText: (string) => void
}

export class Start extends Component<Props, void> {

    updateText() {
        this.props.updateText('test')
        console.log('Update')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.jss to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <TouchableHighlight>
                    <Text onPress={this.updateText.bind(this)}>
                        test {this.props.text}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {
        text: state.startState.text
    }
}

function mapDispatchToProps(dispatch: (Action) => void, ownProps: any) {
    return {
        updateText: bindActionCreators(UpdateTextAction, dispatch)
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
