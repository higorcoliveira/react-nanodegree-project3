import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import { gray } from '../util/colors'
import { MaterialIcons } from '@expo/vector-icons'

const Header = (props) => {
    const { navigation, label } = props

    return (
      <View>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <View style={styles.container}>
                <MaterialIcons name='arrow-back' size={35} color='white' />
                <View style={styles.labelWrapper}>                
                    <Text style={styles.label}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        elevation: 2,
        height: 60,
        flexDirection: 'row',
        backgroundColor: gray
    },
    label: {
        color: 'white',
        fontSize: 20,
    },
    labelWrapper: {
        marginTop: 5,
        marginLeft: 5,
    },
})

export default withNavigation(Header)
