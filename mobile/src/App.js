import 'react-native-gesture-handler'; //isso aqui é necessário para usarmos a lib react navigation
//(essa lib é para navegar entre as telas)

import React, {useEffect, useState} from 'react';

import {Button, Text} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
//import MapIcon from 'react-native-vector-icons/FontAwesome';
import GraphIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather'; //map  //search //camera //user

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Create from './pages/Create';
import Login from './pages/Login';
import Home from './pages/Home';
import Collect from './pages/Collect';
import Camera from './pages/Camera';
import Profile from './pages/Profile';

import Menu from './components/Menu';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused ? 'map' : 'map';
              color = '#c4c4c4';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
              color = '#c4c4c4';
            } else if (route.name === 'Camera') {
              iconName = focused ? 'camera' : 'camera';
              color = '#fff';
            } else if (route.name === 'Collect') {
              iconName = focused ? 'search' : 'search';
              color = '#c4c4c4';
            } else if (route.name === 'Home') {
              iconName = focused ? 'graph' : 'graph';
              color = '#c4c4c4';
            }

            // You can return any component that you like here
            return <FeatherIcon name={iconName} size={24} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#34CB79',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Login" component={LoginStackScreen} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Collect" component={Collect} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/**<Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="Home">
            {props => <Home {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Create" component={Create} />
          </>
        )}
      </Stack.Navigator> */

const LoginStack = createStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: props => MenuFunction(),
          headerStyle: {
            backgroundColor: '#f5eef5',
          },
        }}
      />
      <LoginStack.Screen name="Create" component={Create} />
    </LoginStack.Navigator>
  );
}

function MenuFunction() {
  return <Menu />;
}
