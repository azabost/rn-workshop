import * as React from 'react'
import { Component } from 'react'
import { View, Text, TouchableHighlight, StyleSheet, ViewStyle, TextStyle } from 'react-native'

export default function listRow(data: string) {
    return (
        <TouchableHighlight style={styles.row} key={data} onPress={() => {
            console.log('tets')
        }}>
            <View style={styles.container}>
                <Text style={styles.rowText}>{data}</Text>
                <Text style={styles.bottomRow}>{data}</Text>
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
    } as TextStyle
})