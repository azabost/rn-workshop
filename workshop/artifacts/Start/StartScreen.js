import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { UpdateTextAction, downloadData } from './startActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../List/List';
export class Start extends Component {
    updateText() {
        this.props.downloadData();
        console.log('Update');
    }
    downloaDataButton() {
        return (React.createElement(TouchableHighlight, null,
            React.createElement(Text, { onPress: this.updateText.bind(this) }, "Download data")));
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            !this.props.issues && this.downloaDataButton(),
            this.props.issues && React.createElement(List, { style: styles.list, items: this.props.issues })));
    }
}
function mapStateToProps(state) {
    return {
        text: state.startState.text,
        issues: state.startState.issues
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateText: bindActionCreators(UpdateTextAction, dispatch),
        downloadData: bindActionCreators(downloadData, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Start);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        marginTop: 65
    }
});
//# sourceMappingURL=StartScreen.js.map