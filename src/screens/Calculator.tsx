import React, { useEffect, useState } from 'react'
import CalculatorIndex from '../components/calculator/index'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface History {
  firstNumber: string
  secondNumber: string
  operator: string
  finalResult: string
}

function Calculator({ navigation }) {
  const [sumDigit, setSumDigit] = useState<string>('')
  const [finalResult, setFinalResult] = useState<string>('')

  function sumNumber(digit: string) {
   switch(digit) {
      case 'C' :
        setSumDigit('')
        setFinalResult('')
        break
      case '=':
        handleNumbers(sumDigit)
        break
      case '+':
        handleOperator(digit)
        break
      case '-':
        handleOperator(digit)
        break
      case '*':
        handleOperator(digit)
        break
      case '/':
        handleOperator(digit)
        break
      case '%':
        //handleOperator(digit)
        break
      case '+/-':
        //handleOperator(digit)
        break
      case ',':
        handleOperator(digit)
        break
      default:
        //handleSumDigit(digit)
        setSumDigit(prevState => prevState + digit)
   }
  }

  // function handleSumDigit(digit: string) {
  //   let prevDigitState = sumDigit + digit 
  //   const regex = /[+\-*/,]/g
  //   const sumDigitOperators: any[] = prevDigitState.match(regex)
  //   prevDigitState = prevDigitState.replace(sumDigitOperators[0], ' ')
  //   const splitedNumbers = prevDigitState.split(' ')
  //   console.log(splitedNumbers)
  //   if (sumDigitOperators === null && splitedNumbers[0].length <= 11) {
  //     setSumDigit(prevDigitState)
  //   } else if (sumDigitOperators !== null && splitedNumbers[1].length <= 11) {
  //     setSumDigit(prevDigitState)
  //   }
  // }

  function handleOperator(digit: string) {
    const regex = /[+\-*/,]/g
    const sumDigitOperators: any[] = sumDigit.match(regex)
    const currentDigitOperators: any[] = digit.match(regex)
    if (sumDigitOperators?.length == 1 && currentDigitOperators.length !== 0) return // Impede uma operação composta
    if (sumDigitOperators?.includes(',') && digit === ',') return 
    const lastDigit = sumDigit.charAt(sumDigit.length - 1)
    if (
      lastDigit !== '+' &&
      lastDigit !== '-' &&
      lastDigit !== '*' &&
      lastDigit !== '/' &&
      lastDigit !== ''
    ) {
      setSumDigit(prevState => prevState + digit)
    }
  } 

  function handleNumbers(digit: string) {
    const regex = /[+\-*/]/g
    const operators = digit.match(regex)

    let filteredNumbers: string = digit
    let splitedNumbers: string[]
    let finalresult: number

    if (operators.length > 1) {
      for (let i = 0; i < operators.length; i++) {
        filteredNumbers = filteredNumbers.replace(operators[i], ' ')
        console.log(filteredNumbers)
      }
    } else {
      filteredNumbers = digit.replace(operators[0], ' ')
      splitedNumbers = filteredNumbers.split(' ')
      switch(operators[0]) {
        case '+':
          finalresult = Number(splitedNumbers[0]) + Number(splitedNumbers[1])
          break
        case '-':
          finalresult = Number(splitedNumbers[0]) - Number(splitedNumbers[1])
          break
        case '*':
          finalresult = Number(splitedNumbers[0]) * Number(splitedNumbers[1])
          break
        case '/':
          finalresult = Number(splitedNumbers[0]) / Number(splitedNumbers[1])
          break
      }
      const currentHistory = {
        firstNumber: splitedNumbers[0],
        secondNumber: splitedNumbers[1],
        operator: operators[0],
        finalResult: String(finalresult)
      }
      updateHistory(currentHistory)
      setFinalResult(String(finalresult))
    }
  }

  async function updateHistory(currentHistory: History) {
    try {
      const allKeys = await AsyncStorage.getAllKeys()
      if (allKeys !== null) {
        console.log('aqui')
        await AsyncStorage.mergeItem('history', JSON.stringify(currentHistory))
      } else {
        const jsonValue = JSON.stringify(currentHistory)
        await AsyncStorage.setItem('history', jsonValue)
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  function removeLast() {
    setSumDigit(sumDigit.slice(0, sumDigit.length - 1))
  }

  return (
    <CalculatorIndex.Root>
      <CalculatorIndex.ViewArea preview={sumDigit} result={finalResult}>
        <CalculatorIndex.ViewAreaIcon setRemove={() => {removeLast()}} navigation={navigation}/>
      </CalculatorIndex.ViewArea>
      <CalculatorIndex.ButtonArea>
        <CalculatorIndex.Button digit={'C'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={''} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'%'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'/'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'7'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'8'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'9'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'*'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'4'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'5'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'6'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'-'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'1'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'2'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'3'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'+'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'+/-'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'0'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={','} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'='} setDigit={(e) => {sumNumber(e)}}/>
      </CalculatorIndex.ButtonArea>
    </CalculatorIndex.Root>
  )
}

export default Calculator;