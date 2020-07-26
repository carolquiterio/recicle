import 'react-native-gesture-handler';  //isso aqui é necessário para usarmos a lib react navigation 
                                        //(essa lib é para navegar entre as telas)

import React from 'react';
import Navigation from './Navigation';
import Login from './pages/Login';

export default function App () // exportao App
{
  return <Login/>;
}