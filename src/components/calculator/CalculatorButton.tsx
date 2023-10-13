import React, { ReactNode, useEffect,useContext } from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { ThemeContext } from '../../context/ThemeContext'

interface CalculatorButtonProps {
  digit: string
  setDigit: (number: string) => void
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({digit, setDigit}) => {
  const { themeObject } = useContext(ThemeContext)

  return (
    <TouchableOpacity 
      style={[styles.Button, {backgroundColor: themeObject.secondaryBackgroundColor}]}
      onPress={() => {setDigit(digit)}}
    >
      <Text style={[styles.ButtonText, {color: themeObject.textColor}]}>{digit}</Text>
    </TouchableOpacity>
  )
}

export default CalculatorButton;