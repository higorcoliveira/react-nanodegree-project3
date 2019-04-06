import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from './middleware'
import Navigator from './components/Navigator'
import { gray } from './util/colors'
import { Constants } from 'expo'

function FlashCardStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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