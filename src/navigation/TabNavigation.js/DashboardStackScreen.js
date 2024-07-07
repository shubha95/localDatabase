import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import DashBoardScreen from '../../screens/tabScreens/DashBoardScreen';
const DashboardStackScreen = () => {
  const DashboardStack = createNativeStackNavigator();
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="DashBordSecreen" component={DashBoardScreen} options={{ headerShown: false, unmountOnBlur: true }}></DashboardStack.Screen>
    </DashboardStack.Navigator>
  )
}

export default DashboardStackScreen;
 