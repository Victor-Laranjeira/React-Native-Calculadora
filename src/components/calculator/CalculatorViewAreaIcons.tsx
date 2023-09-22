import React, { ReactNode } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, } from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

// interface CalculatorViewAreaIconsProps {
//   setRemove: () => void
// }

function CalculatorViewAreaIcons({ setRemove, navigation }) {

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('History')}> 
        <FontAwesomeIcon color='#adb5bd' size={20} icon={faClock} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setRemove()}}>
        <FontAwesomeIcon color='#adb5bd' size={20} icon={faDeleteLeft} />
      </TouchableOpacity>
    </>
  )
}

export default CalculatorViewAreaIcons;