import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, StyleSheet, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import Header from './Header'
import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'

class QuizBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      index: 0,
    }
  }

  isCorrect = () => {
    const { index, score } = this.state
    this.setState({
      index: index + 1, 
      score: score + 1, 
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

  restartQuiz = () => {
    this.setState({
      index: 0, score: 0
    })
  }

  render() {
    const { index, score } = this.state
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
            : (<ScoreCard 
                score={score}
                restartQuiz={this.restartQuiz}
              />)
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