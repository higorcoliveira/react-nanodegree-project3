import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, StyleSheet, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import Header from './Header'
import QuestionCard from './QuestionCard'

class QuizBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correctAnswers: 0,
      index: 0,
    }
  }

  isCorrect = () => {
    const { index, correctAnswers } = this.state
    this.setState({
      index: index + 1, 
      correctAnswers: correctAnswers + 1, 
    })
  }

  isIncorrect = () => {
    const { index } = this.state
    this.setState({ index: index + 1 })
  }

  isQuestionAvailable = (questions) => {
    const { index } = this.state
    return index < questions.length
  }

  render() {
    const { index, correctAnswers } = this.state
    const { deck } = this.props

    return (
      <View style={styles.container}>
        <Header label={'Quiz'} />
        {
          this.isQuestionAvailable(deck.questions)
            ? (<QuestionCard 
                index={index}                
                questions={deck.questions}
                isCorrect={this.isCorrect}
                isIncorrect={this.isIncorrect}
              />)
            : (<Text>SCORE!!!</Text>)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

QuizBoard.propTypes = {
  deck: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  const title = navigation.getParam('title')
  return {
      deck: state.decks.data[title]
  }
}

export default withNavigation(connect(mapStateToProps)(QuizBoard))