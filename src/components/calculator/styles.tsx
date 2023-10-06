import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Main: {
    flex: 1
  },
  ResultArea: {
    height: `${40}%`,
    backgroundColor: 'white'
  },
  ViewArea: {
    height: `${85}%`,
    paddingTop: 30,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  ViewAreaText: {
    height: 50,
    width: `${100}%`,
    paddingRight: 20,
    fontSize: 26,
    backgroundColor: 'white',
    textAlign: 'right',
    textAlignVertical: 'center'
  },
  ViewAreaButtons: {
    flexDirection: 'row',
    height: 50,
    width: `${90}%`,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',  
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#adb5bd'  
  },
  ButtonArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: `${60}%`,
    columnGap: 10,
    rowGap: 18,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 15,
    justifyContent: 'space-between'
  },
  Button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 25,
  },
  HistoryHeader: {
    flexDirection: 'row',
    marginTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    justifyContent: 'space-between'
  },
  HistoryItem: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    width: `${100}%`,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    columnGap: 3
  },
  HistoryItemText: {
    fontSize: 20,
  }
})