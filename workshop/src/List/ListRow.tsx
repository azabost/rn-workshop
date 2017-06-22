import * as React from 'react'
import { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet, ViewStyle, TextStyle } from 'react-native'

export default function listRow(data: string) {
    return (
        <TouchableHighlight style={styles.row} key={data} onPress={() => {
            console.log('tets')
        }}>
            <Text style={styles.rowText}>{data}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    row: {
        height: 50,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    } as ViewStyle,
    rowText: {
        alignSelf: 'center',
    } as TextStyle
})