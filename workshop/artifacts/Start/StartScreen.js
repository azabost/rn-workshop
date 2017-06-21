import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { UpdateTextAction } from './startActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
export class Start extends Component {
    updateText() {
        this.props.updateText('test');
        console.log('Update');
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, "Open up App.jss to start working on your app!"),
            React.createElement(Text, null, "Changes you make will automatically reload."),
            React.createElement(TouchableHighlight, null,
                React.createElement(Text, { onPress: this.updateText.bind(this) },
                    "test ",
                    this.props.text))));
    }
}
function mapStateToProps(state) {
    return {
        text: state.startState.text
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateText: bindActionCreators(UpdateTextAction, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Start);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
//# sourceMappingURL=StartScreen.js.map