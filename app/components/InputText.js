import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Hideo } from 'react-native-textinput-effects';


export default class InputText extends Component {

  render() {
    return (  
	    	<View>
	    	<Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
			    Login with Facebook
			  </Icon.Button>
		    	<Hideo
		    		iconClass={Icon}
				    iconName={'envelope'}
				    iconColor={'white'}
				    iconBackgroundColor={'#f2a59d'}
				    inputStyle={{ color: '#464949' }}
				/>
				
			</View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginTop: 1,
  },
});