import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { white, black } from '../util/colors'
import { clearLocalNotification, setLocalNotification } from '../service/notification'

class ScoreCard extends Component {

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const { navigation, score, restartQuiz } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.score}>
          <Text style={styles.scoreTitle}>Sua pontuação: { score }</Text>
        </View>
        <View style={styles.content}>
            <View style={styles.container}>
              <TouchableOpacity style={styles.startQuiz}
                onPress={restartQuiz}>
                <Text style={styles.startQuizTitle}>Tentar de Novo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.back}
                onPress={() => { navigation.goBack() }}>
                <Text style={styles.backTitle}>Voltar para o Baralho</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  score: {
    alignItems: 'center',
    marginTop: 50,
  },
  scoreTitle: {
    fontSize: 40,
  },  
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  startQuiz: {
    backgroundColor: white,
    marginTop: 150,
    padding: 10,
    marginLeft: 25,
    height: 50,
    width: 200,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: black,
  },
  startQuizTitle: {
    color: black,
    fontSize: 20,
    textAlign: 'center',
  },
  back: {
    backgroundColor: black,
    margin: 25,
    padding: 10,
    height: 70,
    width: 200,
    borderRadius: 8,
  },
  backTitle: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
  },
})

export default withNavigation(ScoreCard)
