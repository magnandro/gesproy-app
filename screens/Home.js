import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Header from '../components/Header';
import Colors from '../constants/colors';


const logIn = () => {
  navigation.navigate('Proyectos')
};

const SignUp = () => {
  console.log("Registrarse")
};

const Home = ({ navigation }) => {

    return(
      <View style={styles.container}>
        <View>
          <Image style={styles.ima_bienvenida} source={require('../assets/img_bienvenida.jpg')} />
          <Text style={styles.title}>Bienvenido!</Text>
          <Text style={styles.parrafo}>Señor ciudadano, el Departamento Nacional de Planeación lo invita a participar en el seguimiento a los proyectos financiados con recursos de regalías</Text>
        </View>

        <View style={styles.botones}>
          <Button title="Ingresar" onPress={() => {navigation.navigate('Proyectos')}} color= {Colors.secondary} /><Button title="Registrarse" onPress={SignUp} color= {Colors.secondary}/>
        </View>
      </View>
    );
};
//<View style={styles.screen}>
//<Header title="GESPROY MÓVIL"></Header>
//</View>
//<StatusBar style="auto" />
export default Home;

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  title: {
    margin: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    color: Colors.primary,
    padding:20,
  },
  ima_bienvenida: {
    paddingTop:0,
    height: 340,
    width: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    padding:0,
    backgroundColor: Colors.background,
  },
  parrafo: {
    justifyContent: 'center',
    paddingLeft:20,
    paddingRight:20,
    textAlign:'justify'
  },
  botones: {
    paddingTop:40,
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:100,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
});