import React, {Component} from 'react';
import {StyleSheet, Button, Text,Image, View, 
	TextInput,Dimensions,TouchableOpacity, 
	AsyncStorage, ActivityIndicator,
ImageBackground} from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { CheckBox } from 'react-native-elements';
import { AuthSession } from 'expo';
import * as Expo from "expo"; 
import Header from './Header';

import { signInWithGoogleAsync, authenticate } from '../../utills/socialLogin';
import {fetchUser, setUser} from '../../actions/user-actions';
import {connect} from 'react-redux';

const FB_APP_ID = '1271654499651267';
const {width : WIDTH } = Dimensions.get("window");

class BodyContent extends Component {

	constructor(props){
		super(props);
		this.props.fetchUser();
		this.pressed = false;
		this.state = {
	    checked: false,
	    username:null,
	    password:null,
	    errorUsername:'',
	    errorPassword:'',
	    showLoader: false,
	    userInfo: null,
	    signedIn: false,
	    data:[],
	  }
	}

	componentDidMount = async () => {
		var uname = await AsyncStorage.getItem('uname');
		var pass = await AsyncStorage.getItem('pass');
		// alert(pass);
		if(uname !== null && pass !== null){
			this.setState({
		        username: uname,
		        password: pass
		      });
		}
	}

  validateInput = (type) => {
  	switch(type){
  		case "username":
	  		if(!this.state.username){
		      this.setState({
		        errorUsername: 'This Field is required',
		      });
		    }else{
		    	this.setState({
		        errorUsername: '',
		      });
		    }
			break;
		case "password":
	  		if(!this.state.password){
		      this.setState({
		        errorPassword: 'This Field is required',
		      });
		    }else{
		    	this.setState({
		        errorPassword: '',
		      });
		    }
			break;
		default:
			break;
  	}
  }

  onClickLogin = () => {
  	if (!this.pressed){
	  	this.setState({showLoader: true});

	  	const { username, password, checked } = this.state;

		fetch('http://192.168.0.64/swoopos_ecommerce/public/api/signin', {
			method: 'POST',
			headers: {
				'Accept': 'Application/json',
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify({
				email: username,
				password: password,
				device_type: 'ios',
				device_id:"ios99919"

			})
		})
		.then((response) => response.json())
		.then((res) => {
			if(res.message == 'Signin done successfully.'){
				if(res.response.accessToken != ''){
					if(checked === true){
						AsyncStorage.setItem('uname',username);
						AsyncStorage.setItem('pass',password);
					}
					
					this.setState({showLoader: false});
					this.props.navigation.navigate('Dashboard');
					alert(res.message);
				}
				else{
					this.setState({showLoader: false});
					alert(res.message);
				}
			}
			else{
				this.setState({showLoader: false});
				alert(res.message);
			}
		})
		.done();
	}
  }

  _renderUserInfo = () => {
	this.props.navigation.navigate('Dashboard');
  };

  _renderUserGamilInfo = () => {
    this.props.navigation.navigate('Dashboard');
  };

  loginViaFacebook = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();

    // You need to add this url to your authorized redirect urls on your Facebook app
    console.log({
      redirectUrl
    });

    // NOTICE: Please do not actually request the token on the client (see:
    // response_type=token in the authUrl), it is not secure. Request a code
    // instead, and use this flow:
    // https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/#confirm
    // The code here is simplified for the sake of demonstration. If you are
    // just prototyping then you don't need to concern yourself with this and
    // can copy this example, but be aware that this is not safe in production.

    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
        `&client_id=${FB_APP_ID}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });

    if (result.type !== 'success') {
      alert('Uh oh, something went wrong');
      return;
    }

    let accessToken = result.params.access_token;
    let userInfoResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,picture.type(large)`
    );
    const userInfo = await userInfoResponse.json();
    this.setState({ userInfo });
}

gmailSignedIn = () => {
    signInWithGoogleAsync().then(user => {
    	this.props.setUser(user);
    	this.props.navigation.navigate('Dashboard');
    });
}


  render() {
  	
    return (
	<ImageBackground 
    source={require('../../assets/bgImg.png')}
    style={styles.container}
    >
    <View style={styles.contentContainer}>
        <Header navigation={this.props.navigation} />
	    <View style={{flex: 2}}>
		    <View style={styles.inputContainer}>
		       <TextInput
			        style={!this.state.errorUsername?styles.inputStyle:styles.inputStyleError}
			        placeholder='User Name'
			        underlineColorAndroid='transparent'
			        onChangeText={(username) => this.setState({username})}
			        onBlur={() => this.validateInput('username')}
			        value={this.state.username}
			    />
			    <FontAwesome name="user-o" size={18} style={styles.iconStyle} />
			    
		    </View>
		    <View style={styles.inputContainer}>
		       <TextInput
			        style={!this.state.errorPassword?styles.inputStyle:styles.inputStyleError}
			        placeholder='Password'
			        underlineColorAndroid='transparent'
			        onChangeText={(password) => this.setState({password})}
			        onBlur={() => this.validateInput('password')}
			        secureTextEntry
			        value={this.state.password}
			    />
			    <Entypo name="key" size={18} style={styles.iconStyle} />
			    <View style={styles.rememberMeContainer}>
				    <CheckBox
			          checked={this.state.checked}
			          onPress={() => this.setState({ checked: !this.state.checked })}
			        />
			        <Text style={styles.rememberMe}>Remember Me</Text>
			        <View>
			        <Text style={styles.textContainer}>Forgot Password?</Text>
			        </View>
			    </View>
		    </View>
		    <View style={{flex: 1, alignItems:'center'}}>
		    	
	    		<TouchableOpacity style={styles.btnRegister} onPress={this.onClickLogin}>
	    		{
	    			this.state.showLoader ? 
	    			<ActivityIndicator color='#fff' size='small' /> :
	    			<Text style={styles.register}>Login</Text>
	    		}
		    	</TouchableOpacity>
		    	
		    	<View style={styles.socialContainer}>
		    		

		    		{!this.state.signedIn ? (
		    			<TouchableOpacity style={styles.circle} onPress={() => this.gmailSignedIn()}>
							<Image source={require('../../assets/gmail-icon.png')} style={{alignItems:'center',justifyContent:'center',width:40, height: 40}} />
		    			</TouchableOpacity>
			        ) : (
			          this._renderUserGamilInfo()
			        )}
		    		<View style={{marginLeft:10, marginRight:10}}>
						<Text style={{color:'white'}}>or connect with</Text>
		    		</View>
		    		{!this.state.userInfo ? (
			          	<TouchableOpacity style={styles.circle} onPress={this.loginViaFacebook}>
							<Image source={require('../../assets/fb-icon.png')} style={{width:40, height: 40}} />
		    			</TouchableOpacity>
			        ) : (
			          this._renderUserInfo()
			        )}
		    		
		    		
		    	</View>
		    </View>
	    </View>
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
  inputStyle:{
  	width:WIDTH - 55,
	height: 40, 
	borderRadius:25,
	paddingLeft:45,
	fontSize: 16,
	backgroundColor:'#464646',
	alignItems:'center',
},
inputStyleError:{
  	width:WIDTH - 55,
	height: 40, 
	borderRadius:25,
	paddingLeft:45,
	fontSize: 16,
	borderColor:'red',
	borderWidth:1,
	backgroundColor:'#464646',
	alignItems:'center',
},
iconStyle:{
	position:'absolute',
	top:10,
	left:10,
	color:'#fff',
	zIndex:99,
},
inputContainer:{
	marginBottom:20,
},
textContainer:{
	color:'#fff',
  	fontSize:16,
  	fontWeight: '300',
},
rememberMeContainer:{
	flexDirection: 'row',
	alignItems:'center',
	left: -17,
},
rememberMe:{
	color:'#fff',
  	fontWeight: '300',
  	left: -20
},
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


function mapStateToProps(state){
	return{
		user: state.user
	}
}

export default connect(mapStateToProps,{setUser, fetchUser})(BodyContent);