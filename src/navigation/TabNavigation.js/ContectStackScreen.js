import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import ContactFormScreen from '../../screens/tabScreens/ContactFormScreen';
const ContectStackScreen = () => {
    const ContectFormStack = createNativeStackNavigator();
  return (
      <ContectFormStack.Navigator>
        <ContectFormStack.Screen  name='contect' component={ContactFormScreen} options={{ headerShown: false, unmountOnBlur: true }}/>
      </ContectFormStack.Navigator> 
  )
}

export default ContectStackScreen
 