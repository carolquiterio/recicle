import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function Navigation () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}