import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, FlatList } from 'react-native'
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';


function CalculatorHistory({ navigation }) {
  return (
    <>
      <View style={styles.historyHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon size={25} color='#2A8BF2' icon={faArrowLeftLong} />
        </TouchableOpacity>
        <Text>Histórico</Text>
      </View>
      <FlatList 
        data={[]}
        renderItem={({item, index}) => {
          return(
            <></>
          )
        }}
      />
    </>
  )
}

export default CalculatorHistory;