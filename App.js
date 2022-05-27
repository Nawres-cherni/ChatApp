import { StatusBar } from 'expo-status-bar';
// @refresh reset

import React, { useState, createContext, useContext, useEffect,component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TextInput, View, LogBox, ActivityIndicator ,Text} from 'react-native'

import Chat from './Pages/Chat'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/SignUp';

import { onAuthStateChanged } from 'firebase/auth'
import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC5e22dFEtLEq9GrQpN3LV25SrZqoa2wXg",
  authDomain: "chat-8b019.firebaseapp.com",
  projectId: "chat-8b019",
  storageBucket: "chat-8b019.appspot.com",
  messagingSenderId: "214428722812",
  appId: "1:214428722812:web:267d1ff8c2ac076de5cbf9"
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}




const Stack = createNativeStackNavigator();





LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);
export default function App(props) {

  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Signup"  component={Signup} />

      <Stack.Screen name="login"  component={Login} />

      <Stack.Screen name='Chat' component={Chat} 
      
      
      />



<Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
      </NavigationContainer>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
