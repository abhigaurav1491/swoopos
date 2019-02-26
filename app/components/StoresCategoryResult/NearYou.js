import React from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';



export default class NearYou extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.heading}>Top Offers Near You  </Text>
          <Text style={styles.txtbox}> Birmingham, BM1 8789</Text>
          <TouchableOpacity style={styles.btn}>
            <Entypo name="location-pin" style={{color: '#fff', fontSize: 30,}} />
          </TouchableOpacity>
        </View>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop:20,
    marginBottom: 20,
    backgroundColor: '#ececec',
    padding: 10,
    height: 88,
  },
  box: {
    flexDirection: 'row', 
    alignItems:'center',
    flex:1,
  },
  heading: {
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#da466b',
    width: 45,
    height: 45,
    borderRadius: 50,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 45,
    color: '#fff',
    position: 'absolute',
    right: 0,
    alignItems:'center',
    justifyContent: 'center',

  },
  txtbox: {
    position: 'absolute',
    bottom: -5,
    right: 20,
    height: 30,
    backgroundColor: '#f1f1f1',
    color: '#000',
    borderRadius: 50,
    textAlign: 'center',
    lineHeight: 30,
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 9,
  }
  
  
});