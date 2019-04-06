import { GET_DECKS, FETCHING, FETCHED } from '../util/constants'

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
        default:
            return state
    }
}