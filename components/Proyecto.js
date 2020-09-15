import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Proyecto({ texto, bpin, valor, estado }) {
  return (
    <View style={styles.container}>
               
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  paragraph: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    width:'50%'
  },
  logo: {
    height: 128,
    width: 128,
  }
});
