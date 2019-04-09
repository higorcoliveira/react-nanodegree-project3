import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { green, lightRed } from '../util/colors'

class QuestionCard extends Component {
    state = {
        showAnswer: false,
    }

    toogleShowAnswer = () => {
        const { showAnswer } = this.state
        this.setState({ showAnswer: !showAnswer })
    }

    render() {
        const { showAnswer } = this.state
        const { index, questions, isCorrect, isIncorrect } = this.props
        const questionLeft = questions.length - index;

        const questionLink = (<View style={styles.showContainer}>
                                <Text style={styles.showAnswerTitle}>{questions[index].answer}</Text>
                                <TouchableOpacity onPress={this.toogleShowAnswer}>
                                    <Text style={styles.showQuestion}>Mostrar pergunta</Text>
                                </TouchableOpacity>
                            </View>)

        const answerLink = (<View style={styles.showContainer}>
                                <Text style={styles.showTitle}>{questions[index].question}</Text>
                                <TouchableOpacity onPress={this.toogleShowAnswer}>
                                    <Text style={styles.showAnswer}>Mostrar resposta</Text>
                                </TouchableOpacity>
                            </View>)

        return (
        <View style={styles.container}>
            <View style={styles.progress}>
                <Text style={styles.progressTitle}>{ questionLeft } / { questions.length }</Text>
            </View>
            <View style={{flex: 6}}>
                <View>
                    { showAnswer ? questionLink : answerLink }
                </View>
                <View style={styles.checkIsCorrect}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => {isCorrect(); this.setState({ showAnswer: false })}}>
                            <Text style={styles.isCorrect}>Correto</Text>
                        </TouchableOpacity>                
                        <TouchableOpacity onPress={() => {isIncorrect(); this.setState({ showAnswer: false })}}>
                            <Text style={styles.isIncorrect}>Incorreto</Text>
                        </TouchableOpacity>
                    </View>
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
    progress: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    progressTitle: {
        fontSize: 20,
    },
    showContainer: {
        alignItems: 'center'
    },
    showTitle: {
        fontSize: 35,
        marginLeft: 15
    },
    showAnswerTitle : {
        fontSize: 30,
        marginLeft: 15
    },
    showQuestion: {
        fontSize: 25, 
        color: green,
        marginTop: 10
    },
    showAnswer: {
        fontSize: 25, 
        color: lightRed,
        marginTop: 10
    },
    checkIsCorrect: {
        alignItems: 'center', 
        justifyContent: 'space-around', 
        flex: 4
    },
    isCorrect: {
        backgroundColor: green,
        justifyContent: 'center',
        height: 40,
        textAlign: 'center',
        width: 250,
        marginTop: 50,
        fontSize: 20,
        borderRadius: 8,
        paddingTop: 5
    },
    isIncorrect: {
        backgroundColor: lightRed,
        justifyContent: 'center',
        height: 40,
        textAlign: 'center',
        width: 250,
        marginTop: 20,
        fontSize: 20,
        borderRadius: 8,
        paddingTop: 5
    },
})

export default QuestionCard
