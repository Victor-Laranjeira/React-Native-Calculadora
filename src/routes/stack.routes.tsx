import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculator from '../screens/Calculator';
import CalculatorHistory from '../components/calculator/CalculatorHistory';

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Calculator">
      <Stack.Screen name="Calculator" component={Calculator}/>
      <Stack.Screen name="History" component={CalculatorHistory}/>
    </Stack.Navigator>
  )
}