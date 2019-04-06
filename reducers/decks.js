import { GET_DECKS } from '../util/constants'

const initialState = {
    data: {},
    status: 'loading',
}

export default function decks (state = initialState, action) {
    switch(action.type) {
        case(GET_DECKS): {
            return {
                ...state,
                status: 'loaded'
            }
        }
        default:
            return state
    }
}