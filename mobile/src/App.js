import 'react-native-gesture-handler'; //isso aqui é necessário para usarmos a lib react navigation
//(essa lib é para navegar entre as telas)

import React, {useEffect, useState} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Create from './pages/Create';
import Login from './pages/Login';
import Home from './pages/Home';
import Collect from './pages/Collect';
import Camera from './pages/Camera';
import Profile from './pages/Profile';
import Details from './pages/Details';

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

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here
            return <Icon name="home" size={26} color="#999" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#34CB79',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Collect" component={Collect} />
        <Tab.Screen name="Camera" component={Camera} />
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
