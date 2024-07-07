import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import UserList from '../../screens/tabScreens/UserList';
const UserStackScreen = () => {
    const UserListStack = createNativeStackNavigator();
  return (
    <UserListStack.Navigator>
        <UserListStack.Screen name='UserSecreen' component={UserList} options={{ headerShown: false, unmountOnBlur: true }}/>
    </UserListStack.Navigator>
  )
}

export default UserStackScreen
 