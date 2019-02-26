import React from 'react';
import {AppRegistry, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default class SearchBox extends React.Component {
  render() {
    return (
      
      
        <View style={styles.searchbox}>
          <Ionicons name="ios-search" size={30} color="#87898c" style={{ position: 'absolute', left: 20, top: 12,}} />
          <TextInput
            style={{width: '80%', padding: 10,}}
             placeholder='Search for any product...'
          />
          <FontAwesome name="microphone" size={30} color="#54a6bc" style={{position: 'absolute', right: 60,}} />
          <TouchableOpacity onPress={this._onPressButton} style={styles.btn}>
            <AntDesign name="arrowright" style={styles.icon} />
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  searchbox: {
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    height: 53,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    position: 'relative',
  },
  btn: {
    backgroundColor: '#da466b',
    color: '#fff',
    fontSize: 20,
    borderRadius: 50,
    width: 53,
    height: 53,
    marginLeft: 8,
    textAlign: 'center',
    lineHeight: 53,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  icon:{
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',

  }
});