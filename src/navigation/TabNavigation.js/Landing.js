import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStackScreen from './HomeStackScreen';
import DashboardStackScreen from './DashboardStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import UserStackScreen from './UserStackScreen';
import ContectStackScreen from './ContectStackScreen';

// import ContactFormScreen from '../../screens/tabScreens/ContactFormScreen'; 

const Landing = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Dashboard') {
                        iconName = focused ? 'dashboard' : 'dashboard';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'profile' : 'profile';
                    } else if (route.name === 'User') {
                        iconName = focused ? 'user' : 'user';
                    } else if (route.name === 'Contect') {
                        iconName = focused ? 'contacts' : 'contacts';
                    } 
                    return <AntDesign name={iconName} size={size} color={'#000000'} />;
                },

            })}
        >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
            <Tab.Screen name="Contect" component={ContectStackScreen} />
            <Tab.Screen name="User" component={UserStackScreen} />         
        </Tab.Navigator>

    )
}

export default Landing;
