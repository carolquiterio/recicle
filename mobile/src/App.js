import 'react-native-gesture-handler'; //isso aqui é necessário para usarmos a lib react navigation
//(essa lib é para navegar entre as telas)

import React, {useEffect, useState} from 'react';

//import {Button, Text} from 'react-native';

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
import TabBarMidleButton from './components/TabBarMidleButton';

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

        <Tab.Screen
          name="Camera"
          component={CameraStackScreen}
          options={{
            tabBarButton: () => <TabBarMidleButton />,
          }}
        />

        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TabBarFunction() {
  return <TabBarMidleButton />;
}

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
            shadowColor: '#f5eef5',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0,
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

const CameraStack = createStackNavigator();

function CameraStackScreen() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerTitle: props => MenuFunction(),
          headerStyle: {
            backgroundColor: '#f5eef5',
            shadowColor: '#f5eef5',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 2,
            elevation: 0,
          },
        }}
      />
    </CameraStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: props => MenuFunction(),
          headerStyle: {
            backgroundColor: '#f5eef5',
            shadowColor: '#f5eef5',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 2,
            elevation: 0,
          },
        }}
      />
    </ProfileStack.Navigator>
  );
}

const CollectStack = createStackNavigator();

function CollectStackScreen() {
  return (
    <CollectStack.Navigator>
      <CollectStack.Screen
        name="Collect"
        component={Collect}
        options={{
          headerTitle: props => MenuFunction(),
          headerStyle: {
            backgroundColor: '#f5eef5',
            shadowColor: '#f5eef5',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 2,
            elevation: 0,
          },
        }}
      />
    </CollectStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => MenuFunction(),
          headerStyle: {
            backgroundColor: '#f5eef5',
            shadowColor: '#f5eef5',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 2,
            elevation: 0,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}
