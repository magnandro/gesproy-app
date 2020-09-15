import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

//import Constants from 'expo-constants';
import Colors from './constants/colors';
import HomeScreen from './screens/Home'
import ProyectosScreen from './screens/Proyectos'
import DetalleProyectoScreen from './screens/DetalleProyecto'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: Colors.primary,},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Gesproy móvil'}}/>
        <Stack.Screen name="Proyectos" component={ProyectosScreen} options={{title: 'Bandeja de proyectos'}}/>
        <Stack.Screen name="DetalleProyecto" component={DetalleProyectoScreen} options={{title: 'Información del proyecto'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();


export default App;