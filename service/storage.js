import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY } from '../util/constants'

// dados iniciais que são carregados no storage
let initialData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'O que é React?',
                answer: 'Uma biblioteca para gerenciar interfaces de usuários.',
            },
            {
                question: 'Onde é feito requisições ajax no React?',
                answer: 'No ciclo de vida componentDidMount.',
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'O que é uma closure?',
                answer: 'A combinação de uma função ao seu ambiente de referência, permitindo o acesso a variáveis fora do escopo da mesma.'
            }
        ]
    }
}

export function loadInitialData() {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
    return initialData;
}

export function getAllDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
        return results === null ? loadInitialData() : JSON.parse(results)
    })
}

export function createDeck(deck) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function createCardOnDeck(deck, question) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
        let existingDecks = JSON.parse(result)
        let newQuestions = JSON.parse(JSON.stringify(existingDecks[deck.title].questions))
        newQuestions.push(question)

        const deckUpdated = JSON.stringify({
            [deck.title]: {title: deck.title, questions: newQuestions},
        })

        return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, deckUpdated);
    })
}

// para reiniciar os dados (usada só pra desenvolvimento)
export function clear() {
    return AsyncStorage.clear()
}