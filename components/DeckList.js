import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleGetDecks } from '../actions/decks'

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetDecks())
  }

  render() {
    const { decks } = this.props
    console.log(decks)

    return (
      <View>
        <Text> {decks['React'].title} </Text>
        {/* <Text> {decks} </Text> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("MAP PROPS")
  console.log(state)
  return {
      decks: state.decks.data,
  }
}

DeckList.propTypes = {
  decks: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired
}

const styles = StyleSheet.create({})

export default connect(mapStateToProps)(DeckList)

