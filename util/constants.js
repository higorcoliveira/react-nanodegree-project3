// DECKS ACTIONS
const GET_DECKS = 'GET_DECKS'
const ADD_DECK = 'ADD_DECK'
const ADD_CARD = 'ADD_CARD'

// STORAGE
const DECKS_STORAGE_KEY = 'decks:flashcards';
const NOTIFICATION_KEY = 'notification:flashcards';

// STATUS
const FETCHING = 'loading'
const FETCHED = 'loaded'

module.exports = {
    GET_DECKS, ADD_DECK, ADD_CARD,
    DECKS_STORAGE_KEY, NOTIFICATION_KEY, 
    FETCHING, FETCHED,
}