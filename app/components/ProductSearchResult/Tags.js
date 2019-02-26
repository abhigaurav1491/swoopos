import React from 'react';
import {AppRegistry,  StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';


export default class Tags extends React.Component {  
  render() {
    return (
      
      <View style={styles.container}>
        <View style={[styles.box, styles.boxfirst, styles.active]}>
          <TouchableOpacity>
            <Text style={styles.heading}><AntDesign name="inbox" style={{color: '#fff', fontSize: 30,}} /> 144</Text>
            <Text style={styles.pera}> Products Found</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.box, styles.boxsecond]}>
          <TouchableOpacity>
            <Text style={styles.heading}><Entypo name="shop" style={{color: '#9fc8d3', fontSize: 30,}} /> 12</Text>
            <Text style={styles.pera}>Store Found</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  box: {backgroundColor: '#ececec', flex: 1, padding: 15, justifyContent: 'center',   alignItems: 'center',},
  boxfirst: {borderTopRightRadius: 10,  borderBottomRightRadius: 10, marginRight: 4,},
  boxsecond: {borderTopLeftRadius: 10,  borderBottomLeftRadius: 10, marginLeft: 4,},
  heading: {color: '#747474', fontSize: 30, fontWeight: 'bold', textAlign: 'center', },
  pera: {color: '#747474', fontSize: 14,},
  active: {backgroundColor: '#54a6bc',},
 
  
});