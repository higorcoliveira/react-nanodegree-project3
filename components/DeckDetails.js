import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Header from './Header'
import { white, black } from '../util/colors'

const DeckDetails = (props) => {
    const { deck, navigation } = props
    
    return (
      <View>
        <Header label={deck.title} />
        <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.title}>{deck.title}</Text>
              <Text style={styles.cards}>{deck.questions.length} carta(s)</Text>
            </View>
            <TouchableOpacity style={styles.addCardButton}
                onPress={() => {
                    navigation.navigate('NewQuestion', {title: deck.title})
                }}
            >
              <Text style={styles.addCardTitle}>Adicionar carta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.startQuizButton}
                onPress={() => {
                    navigation.navigate('Quiz', {title: deck.title})
                }}
            >               
              <Text style={styles.startQuizTitle}>Iniciar Quiz</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginTop: 120,
        alignItems: 'center'
    },
    content: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    title: {
        fontSize: 35
    },
    cards: {
        fontSize: 20, 
        marginTop: 10
    },
    addCardButton: {
        backgroundColor: white,
        marginTop: 250,
        padding: 10,
        height: 50,
        width: 200,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: black,
    },
    addCardTitle: {
        color: black,
        fontSize: 20,
        textAlign: 'center',
    },
    startQuizButton: {
        backgroundColor: black,
        margin: 25,
        padding: 10,
        height: 50,
        width: 200,
        borderRadius: 8,
    },
    startQuizTitle: {
        color: white,
        fontSize: 20,
        textAlign: 'center',
    },
})

DeckDetails.propTypes = {
    deck: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps = (state, ownProps) => {
    const { navigation } = ownProps
    const title = navigation.getParam('title')
    return {
        deck: state.decks.data[title]
    }
  }

export default withNavigation(connect(mapStateToProps)(DeckDetails))
