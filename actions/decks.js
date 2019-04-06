import { GET_DECKS } from '../util/constants'
import { getAllDecks } from '../service/storage'

function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks: decks
    }
}

export function handleGetDecks() {
    return (dispatch) => {
        return getAllDecks()
            .then((decks) => dispatch(getDecks(decks)))
    }
}