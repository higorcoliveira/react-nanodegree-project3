import { GET_DECKS, ADD_DECK, FETCHING, FETCHED } from '../util/constants'

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
        default:
            return state
    }
}