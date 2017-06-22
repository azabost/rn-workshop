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
                <Text style={styles.rowText}>{issue.title}{issue.title}{issue.title}{issue.title}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    row: {                
        minHeight: 150,     
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    } as ViewStyle,
    container: {
        flex: 1,
        justifyContent: 'space-between'
    } as ViewStyle,
    rowText: {            
        alignSelf: 'center',
        marginBottom: 20
    } as TextStyle,
    bottomRow: {
        marginBottom: 10,
        backgroundColor: 'green',
        alignSelf: 'center',
    } as TextStyle,
    image: {
        marginTop: 10,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: 'blue',
        height: 50,
        width: 50
    } as ViewStyle
})