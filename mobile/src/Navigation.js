import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './pages/Login';

const Tab = createBottomTabNavigator();

export default function Navigation () {
    return (
     <Tab.Navigator>
        <Tab.Screen name="Login" component={Login}/>
    </Tab.Navigator>
    )
}