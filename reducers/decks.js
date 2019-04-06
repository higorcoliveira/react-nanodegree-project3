import { GET_DECKS } from '../util/constants'

const initialState = {
    data: {},
    status: 'loading',
}

export default function decks (state = initialState, action) {
    switch(action.type) {
        case GET_DECKS: {
            console.log("REDUCER")
            console.log(action)
            return {
                ...state,
                data: action.decks,
                status: 'loaded'
            }
        }
        default:
            return state
    }
}