import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Home from '../../screens/tabScreens/Home';
const HomeStackScreen = () => {
  console.log('Stack Update ------------------')
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name='HomeScreen' component={Home}  options={{ headerShown: false , unmountOnBlur: true}}/>
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen