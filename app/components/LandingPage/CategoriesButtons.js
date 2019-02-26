import React from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default class CategoriesButtons extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity>
            <Text style={[styles.btn, styles.active]}> Food & Drinks </Text>
          </TouchableOpacity> 
          <TouchableOpacity>
          <Text style={styles.btn}> Grocery </Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.btn}> Electronics </Text>
          </TouchableOpacity> 
        </View>
        <View style={styles.box}>
          <TouchableOpacity>
            <Text style={styles.btn}> Mens Clothing </Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.btn}>Womens Clothing</Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.btn}>Shoes</Text>
          </TouchableOpacity> 
        </View>
        <View style={styles.box}>
          <TouchableOpacity>
            <Text style={styles.btn}>Watches</Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.btn}>Health & Beauty</Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.btn}>Sports</Text>
          </TouchableOpacity> 
        </View>
        <View style={styles.box}>
          <TouchableOpacity>
            <Text style={styles.btn}>Home Appliances</Text>
          </TouchableOpacity> 
          <TouchableOpacity>
            <Text style={styles.btn}>Garden</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>Pets</Text>
          </TouchableOpacity> 
        </View>         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    color: '#000',
    borderColor: '#dfdfdf',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 50,
    width: 110,
    height: 45,
    margin: 5,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 45,
  },
  active: {
    backgroundColor: '#54a6bc',
    color: '#fff',
  }
  
  
});