import 'react-native-gesture-handler'; //isso aqui é necessário para usarmos a lib react navigation
//(essa lib é para navegar entre as telas)

import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Create from './pages/Create';
import Login from './pages/Login';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home">
            {props => <Home {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Create" component={Create} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
