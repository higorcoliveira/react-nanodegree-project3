import { GET_DECKS, ADD_DECK, ADD_CARD } from '../util/constants'
import { getAllDecks, createDeck, createCardOnDeck } from '../service/storage'

function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks: decks
    }
}

function addDeck(decks) {
    return {
        type: ADD_DECK,
        decks: decks
    }
}

function addCard(deck, question) {
    return {
        type: ADD_CARD,
        question: question,
        deck: deck
    }
}

export function handleGetDecks() {
    return (dispatch) => {
        return getAllDecks()
            .then((decks) => dispatch(getDecks(decks)))
    }
}

export function handleCreateDeck(deck) {    
    createDeck(deck)
    return (dispatch) => {
        return getAllDecks()
            .then((decks) => dispatch(addDeck(decks)))
    }
}

export function handleCreateCardOnDeck(deck, question) {
    createCardOnDeck(deck, question)
    return (dispatch) => {
        return getAllDecks()
            .then(() => dispatch(addCard(deck, question)))
    }
}