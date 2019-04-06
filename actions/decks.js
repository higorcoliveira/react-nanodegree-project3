import { GET_DECKS, ADD_DECK } from '../util/constants'
import { getAllDecks, createDeck } from '../service/storage'

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