import React, { ReactNode, useContext } from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { ThemeContext } from '../../context/ThemeContext'

interface CalculatorViewAreaProps {
  children: ReactNode
  preview?: string
  result?: string
}

const CalculatorViewArea: React.FC<CalculatorViewAreaProps> = ({children, preview, result }) => {
  const { themeObject } = useContext(ThemeContext)

  return (
    <SafeAreaView style={[styles.ResultArea, {backgroundColor: themeObject.primaryBackgroundColor}]}>
      <View style={[styles.ViewArea, {backgroundColor: themeObject.primaryBackgroundColor}]}>
        <TextInput 
          style={[styles.ViewAreaText, {backgroundColor: themeObject.primaryBackgroundColor, color: themeObject.textColor}]} 
          value={preview}
        />
        <Text style={[styles.ViewAreaText, 
          {backgroundColor: themeObject.primaryBackgroundColor, 
          color: themeObject.textColor}]}
        >
          {result}
        </Text>
      </View>
      <View style={[styles.ViewAreaButtons, {backgroundColor: themeObject.primaryBackgroundColor}]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default CalculatorViewArea;