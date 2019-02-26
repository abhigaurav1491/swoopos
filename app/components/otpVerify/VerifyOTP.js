import React, {Component} from 'react';
import {StyleSheet, Dimensions, Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { Entypo } from '@expo/vector-icons'
import CodeInput from 'react-native-confirmation-code-input';

const {width : WIDTH } = Dimensions.get("window");

export default class VerifyOTP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer:30
    }
  }

  componentDidMount(){
  this.interval = setInterval(
    () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
    1000
  );
}

componentDidUpdate(){
  if(this.state.timer === 0){ 
    clearInterval(this.interval);
    if(this.state.timer === 0)
      alert('Time out');
  }
}
  
  render() {
    return (
        <ImageBackground 
        source={require('../../assets/bgImg.png')}
        style={styles.container}
        >
         	<View style={styles.contentContainer}>
         		<View style={styles.logoContainer}>
         			<Image source={require('../../assets/logo.png')} style={styles.logo} />
         		</View>
         		<View style={{flex:2, flexDirection:'column'}}>
         		<View style={styles.inputContainer}>
         			
            <CodeInput
              ref="codeInputRef1"
              secureTextEntry
              className={'border-b'}
              space={5}
              size={30}
              codeLength={4}
              inputPosition='center'
              onFulfill={(code) => this._onFulfill(code)}
            />
				    
         		</View>
         		<View style={styles.textContainer}>
			    	<Text style={styles.otpTextStyle}>We have sent an OTP to verify the phone number.
			    	 You do not have to do anything, 
			    	 we will read automatically and complete the registration.</Text>
			    </View>
          <View>
			    <View style={{flexDirection:'row',justifyContent:'center'}}>
					<Entypo name="stopwatch" size={18} style={styles.iconStyle} />
					<Text style={styles.textContainer}>00:{this.state.timer}</Text>
          </View>
			    </View>
          
         		</View>
         	</View>
		</ImageBackground>
    );
  }

  _onFulfill = (code) => {
    const {params} = this.props.navigation.state;
   console.log(params);
   if(params.otp == code){
      fetch('http://192.168.0.64/swoopos_ecommerce/public/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
              name: params.data.name,
              email: params.data.email,
              password: '123456',
              mobile: params.data.mobile,
              gender: params.data.gender,
              dob: params.data.dob,
              referralCode: params.data.refCode,
              device_type: 'android',
              device_id: 'android01',
            })
          })
          .then((response) => response.json())
          .then((res) => {
          if(res.message == 'Register done successfully.'){
            if(res.response.accessToken != ''){
              this.props.navigation.navigate('Dashboard');
              alert(res.message);
            }
            else{
              alert(res.message);
            }
          }else{
            alert(res.message);
          }
          })
          .done();
   }else{
    alert('Please enter valid code');
   }
   // const {mobile,dob,email,name,refCode,gender} = this.props.data;
   // alert(this.props.data.otp);
    // this.props.navigation.navigate('RegisterScreen');
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
  logoContainer: {
  	flex:1,
  	alignItems:'center',
  	marginTop:60,
  },
  inputContainer:{
  	alignItems:'center',
  	flexDirection:'row',
  	justifyContent:'center',
  },
  logo: {
  	width:180,
  	height:45,
  },
  inputStyle:{
  	width:40,
	fontSize: 16,
	borderColor:'white',
	backgroundColor:'#fff',
	alignItems:'center',
	marginRight:5
},
otpTextStyle:{
	color:'#fff',
	textAlign:'center',
	padding:32,
	lineHeight:22,
	
},
textContainer:{
	color:'#fff',
},
iconStyle:{
	right:10,
	color:'#fff',
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
});