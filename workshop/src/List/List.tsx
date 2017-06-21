import * as React from 'react'
import { Component } from 'react'
import { View, Text, ListView, StyleSheet, ViewStyle } from 'react-native'

interface Props {
    
}

export default class List extends Component<Props, void> {

    render() {
        return (
            <View style={styles.container}>
                <Text> text </Text>
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
    } as ViewStyle
});
