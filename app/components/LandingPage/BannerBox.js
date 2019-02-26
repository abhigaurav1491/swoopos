import React from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import ImageSlider from 'react-native-image-slider';


export default class BannerBox extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.img}>
          <ImageSlider autoPlayWithInterval={3000} images={[
            require('../../assets/images/banner.jpg'),
            require('../../assets/images/img.jpg'),
            require('../../assets/images/banner.jpg'),
          ]}/>
        </View>          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  img: {
    flex: 1,
    marginBottom: 15,
    height: 171,
  }
  
  
});