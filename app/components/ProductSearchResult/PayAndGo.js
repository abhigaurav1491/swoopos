import React from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default class payAndGo extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
          <View style={[styles.bgfirst, styles.box]}>
            <View style={styles.img}>
              <Image style={{width: 40}} source={require('../../assets/images/pag.png')} />
            </View>
            <Text style={styles.txt}>Pay & Go</Text>
          </View>
          <View style={[styles.bgsecond, styles.box]}>
            <View style={styles.img}>
             <Image style={{width: 59}} source={require('../../assets/images/lc.png')} />
            </View>
            <Text style={styles.txt}>Loyalty Card</Text>
          </View>
          <View style={[styles.bgthired, styles.box]}>
            <View style={styles.img}>
              <Image style={{width: 53 }} source={require('../../assets/images/bat.png')} />
            </View>
            <Text style={styles.txt}>Book A Table</Text>
          </View>
          <View style={[styles.bgfour, styles.box]}>
            <View style={styles.img}>
              <Image style={{width: 53}} source={require('../../assets/images/tags.png')} />
            </View>
            <Text style={styles.txt}>Nearby Deals</Text>
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  box: {
    flex:1,    
    color: "#fff",    
    justifyContent: 'center',  
    alignItems:'center',
    padding: 8,
  },
  bgfirst: {
    backgroundColor: '#e39600'
  },
  bgsecond: {
    backgroundColor: '#da466b'
  },
  bgthired: {
    backgroundColor: '#7312aa'
  },
  bgfour: {
    backgroundColor: '#54a6bc'
  },
  txt: {
    color: '#fff',
    fontSize: 12,
  },
  img: {  
    height: 61,
    justifyContent: 'center'
  }
  
  
});