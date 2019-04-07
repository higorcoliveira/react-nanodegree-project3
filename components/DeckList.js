import React, { Component } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleGetDecks } from '../actions/decks'
import DeckInfo from './DeckInfo'

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleGetDecks())
  }

  renderItem = ({item}) => (
    <View>      
      <TouchableOpacity onPress={() => 
        this.props.navigation.navigate('DeckDetails', { deck: item })}
      >
        <DeckInfo title={item.title} questions={item.questions} />
      </TouchableOpacity>
    </View>
  )

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>        
        {Object.keys(decks).length > 0 &&
          <FlatList 
            data={decks}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.title}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      decks: Object.values(state.decks.data).sort()
  }
}

DeckList.propTypes = {
  decks: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})

export default connect(mapStateToProps)(DeckList)

