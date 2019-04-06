import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from './middleware'
import Navigator from './components/Navigator'
import FlashCardStatusBar from './components/FlashCardStatusBar'
import { gray } from './util/colors'

export default class App extends React.Component {

  store = createStore(reducer, middleware)

  render() {
    return (
      <Provider store={this.store}>
        <View style={{flex: 1}}>
          <FlashCardStatusBar backgroundColor={gray} barStyle="light-content" />
          <Navigator />
        </View>
      </Provider>
    )
  }
}