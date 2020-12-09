import 'react-native-gesture-handler'; //isso aqui é necessário para usarmos a lib react navigation
//(essa lib é para navegar entre as telas)
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useState} from 'react';
import {Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {Button, Text} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
//import MapIcon from 'react-native-vector-icons/FontAwesome';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
import Details from './pages/Details';
import Tips from './pages/Tips';
import CreateNewCollect from './pages/CreateNewCollect';
import CreateNewTip from './pages/CreateNewTip';

import Menu from './components/Menu';
import TabBarMidleButton from './components/TabBarMidleButton';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#34cb79',
              shadowColor: '#34cb79',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
            headerTintColor: '#fff',
          }}></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#34cb79',
              shadowColor: '#34cb79',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
            headerTintColor: '#fff',
          }}></Stack.Screen>
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            title: 'Criar conta',
            headerStyle: {
              backgroundColor: '#34cb79',
              shadowColor: '#34cb79',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
            },
            headerTintColor: '#fff',
          }}></Stack.Screen>
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{
            headerTitle: props => MenuFunction(),
            headerStyle: {
              backgroundColor: '#f5eef5',
            },
            headerTintColor: '#fff5eef5f',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'map-marker-radius';
              break;
            case 'Collect':
              iconName = 'lightbulb-on-outline';
              break;
            default:
              iconName = 'circle';
              break;
          }
          // You can return any component that you like here
          return (
            <MaterialComunityIcons name={iconName} size={28} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#34CB79',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="TipsStackScreen" component={TipsStackScreen} />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({tintColor}) => (
            <View>
              <LinearGradient
                style={styles.iconTabRound}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                colors={['#08DDB4', '#34bc79']}>
                <FeatherIcon name="award" size={28} color="#FFF" />
              </LinearGradient>
            </View>
          ),
        }}
      />

      <Tab.Screen name="Home" component={HomeStackScreen} />
    </Tab.Navigator>
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
            backgroundColor: '#34cb79',
            shadowColor: '#34cb79',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0,
          },
          headerTintColor: '#fff',
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
      <HomeStack.Screen
        name="ProfileStackScreen"
        component={ProfileStackScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

const WelcomeStack = createStackNavigator();

function WelcomeStackScreen() {
  return (
    <WelcomeStack.Navigator screenOptions={{headerShown: false}}>
      <WelcomeStack.Screen name="Welcome" component={WelcomeStackScreen} />
      <WelcomeStack.Screen name="CreateAccount" component={CreateAccount} />
      <WelcomeStack.Screen
        name="LoginStackScreen"
        component={LoginStackScreen}
      />
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

const DetailsStack = createStackNavigator();

function DetailsStackScreen() {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen
        name="Details"
        component={Details}
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
    </DetailsStack.Navigator>
  );
}

const TipsStack = createStackNavigator();

function TipsStackScreen() {
  return (
    <TipsStack.Navigator>
      <TipsStack.Screen
        name="Tips"
        component={Tips}
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
    </TipsStack.Navigator>
  );
}
