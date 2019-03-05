import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

listItem = (props) => {
    <View style={style.listItem}>
        <Text>props.placeName</Text>
    </View>
}

const style = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBotton: 5,
        backgroundColor: '#eee'
    }
})

export default ListItem