import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SingUpScreen from '../screens/auth/SingUpScreen';
import Landing from './TabNavigation.js/Landing';
const LandingNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" component={LoginScreen} options={{ title: 'Overview', headerShown: false }} />
                <Stack.Screen name="singUp" component={SingUpScreen} options={{ title: 'Overview', headerShown: false }} />
                <Stack.Screen name="tabLanding" component={Landing} options={{ title: 'Landing', headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default LandingNavigation
