import * as React from 'react'
import { Component } from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { Issue } from '../Start/startActions'

export default function listRow(issue: Issue) {
    return (
        <TouchableHighlight style={styles.row} key={issue.title} onPress={() => {
            console.log(issue.title)
        }}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: issue.avatarUrl }} />
                <Text>{issue.title}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    row: {
        height: 100,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    } as ViewStyle,
    container: {
        flex: 1,
        justifyContent: 'space-between'
    } as ViewStyle,
    rowText: {
        marginTop: 10,
        backgroundColor: 'red',
        alignSelf: 'center',
    } as TextStyle,
    bottomRow: {
        marginBottom: 10,
        backgroundColor: 'green',
        alignSelf: 'center',
    } as TextStyle,
    image: {
        marginTop: 10,
        borderRadius: 35,
        alignSelf: 'center',
        backgroundColor: 'blue',
        height: 70,
        width: 70
    } as ViewStyle
})