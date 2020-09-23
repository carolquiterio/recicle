import 'react-native-gesture-handler'; //isso aqui é necessário para usarmos a lib react navigation
//(essa lib é para navegar entre as telas)
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useState} from 'react';
import {Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {Button, Text} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
//import MapIcon from 'react-native-vector-icons/FontAwesome';
import GraphIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather'; //map  //search //camera //user

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Home from './pages/Home';
import Collect from './pages/Collect';
import Camera from './pages/Camera';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';

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
          tabBarIcon: ({color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Login':
                iconName = 'award';
                break;
              default:
                iconName = 'circle';
                break;
            }
            // You can return any component that you like here
            return <FeatherIcon name={iconName} size={28} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#34CB79',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Login" component={LoginStackScreen} />

        <Tab.Screen
          name="Camera"
          component={WelcomeStackScreen}
          options={{
            tabBarIcon: ({tintColor}) => (
              <View>
                <LinearGradient
                  style={styles.iconTabRound}
                  start={{x: 0, y: 1}}
                  end={{x: 0, y: 0}}
                  colors={['#08DDB4', '#34bc79']}>
                  <GraphIcon name="camera" size={22} color="#FFF" />
                </LinearGradient>
              </View>
            ),
          }}
        />

        <Tab.Screen name="Home" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
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
      <LoginStack.Screen name="CreateAccount" component={CreateAccount} />
      <LoginStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
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
          headerTintColor: '#34cb79',
        }}
      />
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

const WelcomeStack = createStackNavigator();

function WelcomeStackScreen() {
  return (
    <WelcomeStack.Navigator screenOptions={{headerShown: false}}>
      <WelcomeStack.Screen name="Welcome" component={Welcome} />
      <WelcomeStack.Screen
        name="LoginStackScreen"
        component={LoginStackScreen}
      />
      <WelcomeStack.Screen name="CreateAccount" component={CreateAccount} />
    </WelcomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#08DDB4',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
