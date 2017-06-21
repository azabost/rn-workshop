import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
class App extends Component {
    updateText() {
        // UpdateTextAction('text')
        // console.log('Update')
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, "Open up App.jss to start working on your app!"),
            React.createElement(Text, null, "Changes you make will automatically reload."),
            React.createElement(Text, null, "Shake your phone to open the developer menu."),
            React.createElement(TouchableHighlight, null,
                React.createElement(Text, { onPress: this.updateText }, this.props.text))));
    }
}
function mapStateToProps(state) {
    return {
        text: state.startState.text
    };
}
export default connect(mapStateToProps, undefined)(App);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
//# sourceMappingURL=StartScreen.js.map