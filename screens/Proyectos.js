import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Avatar, IconButton, Card, Title, Paragraph } from 'react-native-paper';
import Constants from 'expo-constants';

// You can import from local files
import Proyecto from '../components/Proyecto';


const Proyectos = ({ navigation }) => {
     return (
          <View style={styles.container}>
               <Text style={styles.paragraph}>
                    Eventos de su interés y conocimiento
               </Text>

               <ScrollView>
                    <Card style={styles.card} onPress={()=>{navigation.navigate('DetalleProyecto',{bpin: 1,nombre:'Construcción de un centro cultural municipal del Copey'})}}>
                         <Card.Title
                              title="2012202380001"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380002"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380003"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380004"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380005"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380003"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380004"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380005"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380003"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380004"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
                    <Card style={styles.card}>
                         <Card.Title
                              title="2012202380005"
                              subtitle="Construcción de un centro cultural municipal del Copey"
                              left={(props) => <Avatar.Icon {...props} icon="folder" />}
                              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
                         />
                    </Card>
               </ScrollView>

          </View>
     );
};

export default Proyectos;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
          padding: 10,
        },
        paragraph: {
          margin: 24,
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        card:{
          margin: 3
        }
});