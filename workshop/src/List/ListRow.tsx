import * as React from 'react'
import { Component } from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'

export default function listRow(data: string) {
    return (
        <View style={styles.row} key={data}>
            <Text style={styles.rowText}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        height: 40,
        backgroundColor: 'blue',
        alignItems: 'stretch'        
    } as ViewStyle,
    rowText: {
        alignSelf: 'center'
    } as TextStyle
})