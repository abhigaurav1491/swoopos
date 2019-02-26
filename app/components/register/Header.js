import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Header extends Component {

  render() {
    return (
	    <View style={styles.logoContainer}>
	    	<Image source={require('../../assets/logo.png')} style={styles.logo} />
	    	<View style={{flexDirection: 'row'}}>
		    	<Text style={styles.logoTextLogin} onPress={() => { this.props.navigation.navigate('LoginScreen') }}>Login</Text>
		    	<Text style={styles.logoTextLogin}> | </Text>
		    	<Text style={styles.logoTextRegister}>Register</Text>
	    	</View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
  	flex:0.75,
  	alignItems:'center',
  	marginTop:40
  },
  logo: {
  	width:180,
  	height:45,
  },
  logoTextLogin:{
  	color:'#a2a09f',
  	fontSize:16,
  	fontWeight: '500',
  	marginTop: 10,
  },
  logoTextRegister:{
  	color:'#fff',
  	fontSize:16,
  	fontWeight: '500',
  	marginTop: 10,
  }
});
