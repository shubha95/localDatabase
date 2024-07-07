import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/tabScreens/ProfileScreen';
const ProfileStackScreen = () => {
    const ProfileStack = createNativeStackNavigator();
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='ProfileSecreen' component={ProfileScreen} options={{ headerShown: false, unmountOnBlur: true }} />
        </ProfileStack.Navigator>
    )
}


export default ProfileStackScreen;
