import React,  { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Avatar, IconButton, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

// You can import from local files
import Colors from '../constants/colors';


export default class DetalleProyecto extends React.Component {
     state = {
       image: null,
       locacion: null,
     };

   
     render() {

       let { image } = this.state;
       let { locacion } = this.state;
   
       return (
            
         <ScrollView>
              <Card>
                    <Card.Content>
                         <Title>BPIN: 2012202380001</Title>
                         <Paragraph>Valor Proyecto: 1.173.310.458,00</Paragraph>
                         <Paragraph>Estado: Terminado</Paragraph>
                         <Paragraph>Designación: Estado Aportante Recursos</Paragraph>
                         <Paragraph>GPS: {locacion && <Text> {locacion}</Text>}</Paragraph>
                    </Card.Content>

               </Card>
           <Button title="Elija una image de su carrete para subir al proyecto" onPress={this._pickImage} />
           {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
           
         </ScrollView>
       );
     }
   
     componentDidMount() {
       this.getPermissionAsync();
     }
   
     getPermissionAsync = async () => {
       if (Platform.OS !== 'web') {
         const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
         if (status !== 'granted') {
           alert('Sorry, we need camera roll permissions to make this work!');
         }
       }
     };
   

     _pickImage = async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
  
          let location = await Location.getCurrentPositionAsync({});
          console.log(JSON.stringify(location));
          this.setState({ locacion: JSON.stringify(location) });
  
     try {
         let result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.All,
           allowsEditing: true,
           aspect: [4, 3],
           quality: 1,
         },
         
         );

         if (!result.cancelled) {
           this.setState({ image: result.uri });
         }
   
         //console.log(result);
       } catch (E) {
         console.log(E);
       }
     };
   }
   