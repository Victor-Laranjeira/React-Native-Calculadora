import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList } from 'react-native'
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface History {
  firstNumber: string
  secondNumber: string
  operator: string
  finalResult: string
}

function CalculatorHistory({ navigation }) {

  const [history, setHistory] = useState<History[]>()

  useEffect(() => {
    readStoredData()
  }, [])

  async function readStoredData() {
    try {
      const jsonValue = await AsyncStorage.getItem('history')
      const value = jsonValue != null ? JSON.parse(jsonValue) : null
      if (Array.isArray(value)) {
        setHistory(value)
      } else if (!Array.isArray(value) && value !== null) {
        setHistory([value])
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  async function clearHistory() {
    try {
      await AsyncStorage.clear()
      setHistory(undefined)
    }
    catch (e) {
      console.log(e)
    }
  } 

  return (
    <>
      <View style={styles.HistoryHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon size={25} color='#2A8BF2' icon={faArrowLeftLong} />
        </TouchableOpacity>
        <TouchableOpacity onPress={clearHistory}>
          <Text>Limpar histórico</Text>
        </TouchableOpacity>
      </View>
      {history !== undefined && (
        <FlatList 
          style={{flexGrow: 1}}
          data={history}
          renderItem={({item, index}) => {
            return(
              <View key={index} style={styles.HistoryItem}>
                <Text style={styles.HistoryItemText}>{item?.firstNumber}</Text>
                <Text style={styles.HistoryItemText}>{item?.operator}</Text>
                <Text style={styles.HistoryItemText}>{item?.secondNumber}</Text>
                <Text style={styles.HistoryItemText}>=</Text>
                <Text style={styles.HistoryItemText}>{item?.finalResult}</Text>
              </View>
            )
          }}
        />
      )}
    </>
  )
}

export default CalculatorHistory;