import React from 'react';
import {AppRegistry, StyleSheet, Image, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default class ChangeCategory extends React.Component {
  render() {
    return (
      
      
        <View style={styles.box}>  
          <View style={styles.lefticon}>
            <Image  source={require('../../assets/images/businessman.png')} />
          </View>        
          <Text style={{width: '65%', padding: 10,}}> Men's Fashion </Text>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="ios-arrow-down" style={styles.icon} />
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    height: 42,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 16,
    position: 'relative',
  },
  lefticon: {
    position: 'absolute',
    top: 5,
    left: 20, 
    width: 27,
  },
  btn: {
    backgroundColor: '#da466b',
    color: '#fff',
    fontSize: 20,
    borderRadius: 50,
    width: 42,
    height: 42,
    textAlign: 'center',
    lineHeight: 42,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  icon: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 42,
  }
});