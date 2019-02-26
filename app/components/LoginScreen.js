import React, {Component} from 'react';
import {StyleSheet, Dimensions, Text, View, ImageBackground, Image, TextInput, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

import Header from './login/Header';
import Footer from './login/Footer';
import LoginContent from './login/LoginContent';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const {width : WIDTH } = Dimensions.get("window");

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null 
  };
  
  render() {
    return (
        <ImageBackground 
        source={require('../assets/bgImg.png')}
        style={styles.container}
        >
         	<View style={styles.contentContainer}>
            <Header navigation={this.props.navigation} />
            <LoginContent navigation={this.props.navigation} />
            
         	</View>
		</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent:'center',
    alignItems:'center',
  },
  contentContainer:{
  	flex: 1,
  },


});