import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Footer extends Component {

  render() {
    return (
	    <View style={{flex: 1, alignItems:'center'}}>
		    
	    	<TouchableOpacity style={styles.btnRegister}>
	    		<Text style={styles.register}>Login</Text>
	    	</TouchableOpacity>
	    	<View style={styles.socialContainer}>
	    		<TouchableOpacity style={styles.circle}>
					<Image source={require('../../assets/gmail-icon.png')} style={{alignItems:'center',justifyContent:'center',width:40, height: 40}} />
	    		</TouchableOpacity>
	    		<View style={{marginLeft:10, marginRight:10}}>
					<Text style={{color:'white'}}>or connect with</Text>
	    		</View>
	    		<TouchableOpacity style={styles.circle}>
					<Image source={require('../../assets/fb-icon.png')} style={{width:40, height: 40}} />
	    		</TouchableOpacity>
	    	</View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({

btnRegister:{
	height: 45,
	borderRadius:25,
	backgroundColor: '#da466b',
	justifyContent:'center',
	alignItems: 'center',
	width:180,
},
register:{
	color:'white',
	fontSize: 16,
	fontWeight:'500',
},
 circle: {
  	alignItems:'center',
  	justifyContent:'center',
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: 'white'
},
socialContainer:{
	flex: 1, 
	flexDirection:'row', 
	alignItems:'center', 
	justifyContent:'center'
}

});
