import React, {Component} from 'react';
import {StyleSheet, Dimensions, Text, View, ImageBackground, Image, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

import Header from './Header';
import Footer from './Footer';
import BodyContent from './BodyContent';

const {width : WIDTH } = Dimensions.get("window");

export default class BackgroundImg extends Component {
  
  render() {
    return (
        <ImageBackground 
        source={require('../assets/bgImg.png')}
        style={styles.container}
        >
         	<View style={styles.contentContainer}>
         		<Header navigation={this.props.navigation} />
         		<BodyContent />
         		<Footer />
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