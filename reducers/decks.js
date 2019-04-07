import { GET_DECKS, ADD_DECK, ADD_CARD, FETCHING, FETCHED } from '../util/constants'

const initialState = {
    data: {},
    status: FETCHING,
}

export default function decks (state = initialState, action) {
    switch(action.type) {
        case GET_DECKS: 
            return {
                ...state,
                data: action.decks,
                status: FETCHED
            }
        case ADD_DECK: {
            const { decks } = action            
            return {
                ...state,
                data: decks
            }
        }
        case ADD_CARD: {
            const { deck, question } = action
            deck.questions.push(question)
            return {
                ...state,
                [deck.title]: {...state[deck.title], questions: deck.questions},
            }
        }
        default:
            return state
    }
}