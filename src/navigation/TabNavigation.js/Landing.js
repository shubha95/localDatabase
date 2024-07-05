import { StyleSheet } from 'react-native'
import React from 'react'
import Home from '../../screens/tabScreens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DatabaseScreen from '../../screens/tabScreens/DatabaseScreen';
import ContactFormScreen from '../../screens/tabScreens/ContactFormScreen';
import ProfileScreen from '../../screens/tabScreens/ProfileScreen';
import UserList from '../../screens/tabScreens/UserList';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Landing = () => {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'dashboard') {
                        iconName = focused ? 'dashboard' : 'dashboard';
                    } else if (route.name === 'contact') {
                        iconName = focused ? 'contacts' : 'contacts';
                    } else if (route.name === 'profile') {
                        iconName = focused ? 'profile' : 'profile';
                    } else if (route.name === 'userList') {
                        iconName = focused ? 'paperclip' : 'paperclip';
                    }

                    // You can return any component that you like here!
                    return <AntDesign name={iconName} size={size} color={'#000000'} />;
                },

            })}
        >
            <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="dashboard" component={DatabaseScreen} options={{ headerShown: false, unmountOnBlur: true }} />
            <Tab.Screen name="contact" component={ContactFormScreen} options={{ headerShown: false, unmountOnBlur: true }} />
            <Tab.Screen name="profile" component={ProfileScreen} options={{ headerShown: false, unmountOnBlur: true }} />
            <Tab.Screen name="userList" component={UserList} options={{ headerShown: false, unmountOnBlur: true }} />
        </Tab.Navigator>

    )
}

export default Landing

const styles = StyleSheet.create({})