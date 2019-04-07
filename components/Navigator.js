import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, 
    createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import { white, gray } from '../util/colors'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import DeckDetails from './DeckDetails'
import NewQuestion from './NewQuestion'
import Quiz from './Quiz'
import { StackTransition } from './StackTransition'

// objeto que representa as abas
const tabs = {
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Meus baralhos',
            tabBarIcon: ({ tintColor }) =>
                <MaterialIcons name="library-books" size={30} color={tintColor} />,
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'Adicionar Baralho',
            tabBarIcon: ({ tintColor }) =>
                <MaterialIcons name="library-add" size={30} color={tintColor} />,
        }
    }
}

const navigationOptions = {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: Platform.OS === 'ios' ? gray : white,
      style: {
        padding: 10,
        height: Platform.OS === 'ios' ? 60 : 'auto',
        fontSize: 18,
        backgroundColor: Platform.OS === 'ios' ? white : gray,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
}

// retorna o componente de abas com o estilo baseado na plataforma
const TabNav =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(tabs, navigationOptions)
    : createMaterialTopTabNavigator(tabs, navigationOptions)

// navegação principal 
const App = createStackNavigator({
    Home: {
        screen: TabNav,
        navigationOptions: {
            header: null
        }
    },
    DeckDetails: {
        screen: DeckDetails,
        navigationOptions: {
            header: null,
        }
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            header: null
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            header: null
        }
    }
}, 
{
    transitionConfig: StackTransition,
})

export default createAppContainer(App)


