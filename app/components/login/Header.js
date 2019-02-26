import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Header extends Component {

  render() {
    return (
	    <View style={styles.logoContainer}>
	    	<Image source={require('../../assets/logo.png')} style={styles.logo} />
	    	<View style={{flexDirection: 'row'}}>
		    	<Text style={styles.logoTextLogin}>Login</Text>
		    	<Text style={styles.logoTextRegister}> | </Text>
		    	<Text style={styles.logoTextRegister} onPress={() => { this.props.navigation.navigate('RegisterScreen') }}>Register</Text>
	    	</View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
  	flex:1,
  	alignItems:'center',
  	marginTop:60
  },
  logo: {
  	width:180,
  	height:45,
  },
  logoTextLogin:{
    color:'#fff',
    fontSize:16,
    fontWeight: '500',
    marginTop: 10,
  	
  },
  logoTextRegister:{
  	color:'#a2a09f',
    fontSize:16,
    fontWeight: '500',
    marginTop: 10,
  }
});
