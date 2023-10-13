import React, { ReactNode, useContext } from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { ThemeContext } from '../../context/ThemeContext'

interface CalculatorButtonAreaProps {
  children: ReactNode
}

const CalculatorButtonArea: React.FC<CalculatorButtonAreaProps> = ({children}) => {
  const { themeObject } = useContext(ThemeContext)

  return (
    <View style={[styles.ButtonArea, {backgroundColor: themeObject.primaryBackgroundColor}]}>
      {children}
    </View>
  )
}

export default CalculatorButtonArea;