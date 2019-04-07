import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import { handleCreateDeck } from '../actions/decks'
import { black, gray, ivory } from '../util/colors'

class NewDeck extends Component {
  // inicializando o objeto que representa o deck
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      questions: [],
    }
  }

  createDeck = deck => {
    const { dispatch } = this.props
    dispatch(handleCreateDeck(deck))
    this.setState({title: ''});
  }

  onSubmit = () => {
    const item = this.state
    const { navigation } = this.props

    this.createDeck({
      [item.title]: {title: item.title, questions: item.questions}
    })

    Alert.alert(
        'Sucesso', 'Baralho Adicionado!',
        [{
          text: 'OK', onPress: () => navigation.navigate('DeckDetails', { deck: item })
        }]
    )
  }

  submitNotAllowed = () => {
    const { title } = this.state
    return title === ''
  }

  render() {
    const { title } = this.state

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Qual será o título do seu baralho?</Text>
            <TextInput
                value={title}
                style={styles.input}
                onChangeText={title => this.setState({title})}
            />
            <Button
                onPress={this.onSubmit}
                title="Adicionar"
                color={black}
                disabled={this.submitNotAllowed()}
                accessibilityLabel="Digite um título para o baralho..."
            />
        </View>
    )
  }
}

NewDeck.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 45
    },
    input: {
        width: 300,
        height: 50,
        fontSize: 20,
        borderWidth: 2,
        borderColor: gray,
        borderRadius: 12,
        backgroundColor: ivory,
        margin: 30,
    },
})

export default withNavigation(connect()(NewDeck))
