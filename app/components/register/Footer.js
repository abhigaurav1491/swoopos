import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const SMS_KEY_ID = 'b4dff0d4-3665-11e9-8806-0200cd936042';
export default class Footer extends Component {

	constructor(props) {
    super(props);
    
    this.state = {
      otp: '',
      data:[]

    }
  }
	userRegister = () => {
		const {mobile,dob,email,name,refCode,gender,checked} = this.props.userData;

		if(!checked){
			// alert(this.props.userData.email);
			fetch('http://192.168.0.64/swoopos_ecommerce/public/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
              email: email,
              emailExist: 1
            })
          })
          .then((response) => response.json())
          .then((res) => {
          if(res.message == "The email has already been taken."){
            alert(res.message);
          }else{
          	const otp = Math.floor(1000 + Math.random() * 9000);
          	// alert(otp);
            fetch('https://2factor.in/API/V1/'+SMS_KEY_ID+'/SMS/'+mobile+'/'+otp)
			    .then((response) => response.json())
			    .then((responseJson) => {
			    	console.log(responseJson);
			      if(responseJson.Status == "Success"){

			    this.props.navigation.navigate('VerifyOTP',{data:this.props.userData, otp:otp});
			      	
			      }else{
			      	alert('Invalid Data found');
			      }
			    })
			    .catch((error) => {
			      console.error(error);
			});
          }
          })
          .done();
		}
	}

  render() {
    return (
	    <View style={{flex: .75, alignItems:'center'}}>
		    
	    	<TouchableOpacity style={styles.btnRegister} onPress={this.userRegister}>
	    		<Text style={styles.register}>Register</Text>
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
