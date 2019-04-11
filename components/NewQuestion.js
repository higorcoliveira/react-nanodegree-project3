import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, StyleSheet, View, TextInput, Alert, Button, KeyboardAvoidingView } from 'react-native'
import { black, gray, ivory } from '../util/colors'
import { handleCreateCardOnDeck } from '../actions/decks'
import Header from './Header'

class NewQuestion extends Component {
  // inicializando o objeto que representa a pergunta
  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answer: '',
    }
  }

  createQuestionOnDeck = question => {
    const { deck, dispatch } = this.props
    dispatch(handleCreateCardOnDeck(deck, question))
    this.setState({question: '', answer: ''});
  }

  onSubmit = () => {
    const newQuestion = this.state
    const { deck, navigation } = this.props

    this.createQuestionOnDeck(newQuestion)

    Alert.alert(
      'Sucesso', 'Carta adicionada ao baralho!',
      [{
        text: 'OK', onPress: () => navigation.navigate('DeckDetails', {title: deck.title})
      }]
    )
  }

  submitNotAllowed = () => {
    const { question, answer } = this.state
    return question.trim().length === 0 || answer.trim().length === 0
  }

  render() {
    const { question, answer } = this.state

    return (
      <View>
        <Header label={'Adicionar carta'} />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <Text style={styles.title}>Pegunta</Text>
              <TextInput
                  value={question}
                  style={styles.input}
                  onChangeText={question => this.setState({question})}
              />
              <Text style={styles.title}>Resposta</Text>
              <TextInput
                  value={answer}
                  style={[styles.input, {marginBottom: 50}]}
                  onChangeText={answer => this.setState({answer})}
              />
              <Button
                  onPress={this.onSubmit}
                  title="Adicionar"
                  color={black}
                  disabled={this.submitNotAllowed()}
                  accessibilityLabel="Digite a pergunta e a resposta..."
              />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingTop: 20,
    },
    title: {
        fontSize: 25
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

NewQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  deck: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  const title = navigation.getParam('title')
  return {
      deck: state.decks.data[title]
  }
}

export default connect(mapStateToProps)(NewQuestion)

