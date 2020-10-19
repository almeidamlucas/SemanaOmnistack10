import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    </>
  )
}

