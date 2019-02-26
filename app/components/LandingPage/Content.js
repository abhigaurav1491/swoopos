import React from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default class Content extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
          <Text style={styles.heading}> More To Love </Text>
          <Text style={styles.peragrap}> Explore 2000+ products, 1000+ food and drink items with great discounts or offers from 100 stores or restaurants near you. </Text>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: 'column', padding: 15,},
  heading: {fontSize: 30, color: '#000', margin: 0, textAlign: 'left',},
  peragrap: {fontSize: 14, color: '#000',}
  
  
});