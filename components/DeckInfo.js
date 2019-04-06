import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const DeckInfo = (props) => {
    const { title, questions } = props

    return (
      <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.cardsCounter}>
                {questions && questions.length} carta(s)
            </Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 12,
        height: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    content: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    title: {
        fontSize: 30
    },
    cardsCounter: {
        fontSize: 20, 
        color: '#666666'
    }
})

export default DeckInfo
