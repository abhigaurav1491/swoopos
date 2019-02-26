import React from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default class Heading extends React.Component {
  render() {
    return (
      
      
          <Text style={styles.heading}> Found 144 products matching the search keyword, near you</Text>          
     
    );
  }
}

const styles = StyleSheet.create({
  heading: {fontSize: 22, lineHeight: 28, color: '#000', marginTop: 20, marginBottom: 20, marginLeft: 10, marginRight:10, textAlign: 'left',}
  
  
});