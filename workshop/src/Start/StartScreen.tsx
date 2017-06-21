import * as React from 'react';
import { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, ViewStyle } from 'react-native';
import { UpdateTextAction } from './startActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../AppState'

interface Props {
    text: string
}

class App extends Component<Props, void> {

    updateText() {
        // UpdateTextAction('text')
        console.log('Update')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.jss to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <TouchableHighlight>
                    <Text onPress={this.updateText.bind(this)}>
                        {this.props.text}
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

export default connect(mapStateToProps, undefined)(App)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    } as ViewStyle
});
