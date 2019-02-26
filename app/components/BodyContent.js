import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput,Dimensions} from 'react-native';
import { Ionicons, FontAwesome,MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { CheckBox } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

const {width : WIDTH } = Dimensions.get("window");
export default class BodyContent extends Component {

	state = {
    checked: false,
    clicked: false,
    isDateTimePickerVisible: false,
    date:'',
    username:null,
    email:null,
    mobile:null,
    refCode:null,
    dob:null,
	errorUsername:'',
	errorEmail:'',
	errorMobile:'',
	errorRefCode:'',
	errorDob:''
  };
 _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

 _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({date: date});
  };

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
		case "email":
			const { email } = this.state;
		    if(!email){
		      this.setState({
		        errorEmail: 'This Field is required',
		      });
		    }else{
		    	this.setState({
		        errorEmail: '',
		      });
		    }
			break;
		case "mobile":
			const { mobile } = this.state;
		    if(!mobile){
		      this.setState({
		        errorMobile: 'This Field is required',
		      });
		    }else{
		    	this.setState({
		        errorMobile: '',
		      });
		    }
			break;
		case "refCode":
			const { refCode } = this.state;
		    if(!refCode){
		      this.setState({
		        errorRefCode: 'This Field is required',
		      });
		    }else{
		    	this.setState({
		        errorRefCode: '',
		      });
		    }
			break;
		case "dob":
			const { dob } = this.state;
		    if(!dob){
		      this.setState({
		        errorDob: 'This Field is required',
		      });
		    }else{
		    	this.setState({
		        errorDob: '',
		      });
		    }
			break;
		default:
			break;
  	}
  }

  onChange = (text) => {
  	this.setState({username: text});
  }
  render() {
    return (
	    <View style={{flex: 2.5}}>
		    <View style={styles.inputContainer}>
		       <TextInput
			        style={!this.state.errorUsername?styles.inputStyle:styles.inputStyleError}
			        placeholder='Your Name'
			        underlineColorAndroid='transparent'
			        onChangeText={(username) => this.setState({username})}
			        onBlur={() => this.validateInput('username')}
			    />
			    <FontAwesome name="user-o" size={18} style={styles.iconStyle} />
			    
		    </View>
		    <View style={styles.inputContainer}>
		       <TextInput
		       		style={!this.state.errorEmail?styles.inputStyle:styles.inputStyleError}
			        placeholder='Your Email Address'
			        underlineColorAndroid='transparent'
			        onChangeText={(email) => this.setState({email})}
			        onBlur={() => this.validateInput('email')}
			    />
			    <MaterialCommunityIcons name="email-outline" size={18} style={styles.iconStyle} />
			    
		    </View>
		    <View style={styles.inputContainer}>
		       <TextInput
			        style={!this.state.errorMobile?styles.inputStyle:styles.inputStyleError}
			        placeholder='Your Mobile Number'
			        underlineColorAndroid='transparent'
			        onChangeText={(mobile) => this.setState({mobile})}
			        onBlur={() => this.validateInput('mobile')}
			    />
			    <AntDesign name="mobile1" size={18} style={styles.iconStyle} />
			    
		    </View>
		    <View style={styles.inputContainer}>
		       <TextInput
		       		style={!this.state.errorRefCode?styles.inputStyle:styles.inputStyleError}
			        placeholder='Referral Code'
			        underlineColorAndroid='transparent'
			        onChangeText={(refCode) => this.setState({refCode})}
			        onBlur={() => this.validateInput('refCode')}
			    />
			    <Ionicons name="md-checkmark-circle" size={18} style={styles.iconStyle} />
			    
		    </View>
		    <View style={styles.inputContainer}>
		        <TextInput
			        style={!this.state.errorDob?styles.inputStyleCal:styles.inputStyleError}
			        placeholder='Date of Birth'
			        underlineColorAndroid='transparent'
			        onChangeText={this._showDateTimePicker}
			        onBlur={() => this.validateInput('dob')}
			    />
			    <FontAwesome name="calendar" size={18} style={styles.iconStyleCal} />
			    
		    </View>
		    <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
        />
		    <View style={styles.inputContainer}>
		    	<Text style={styles.textContainer}>Gender</Text>
			   <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
	
				    <RadioGroup 
				    style={{flexDirection:'row', marginTop: -5}}
				    color='white' 
				    onSelect = {() => this.setState({ clicked: !this.state.clicked })}>
				        <RadioButton style={{highlightColor:'white'}} value={'item1'} >
				          <Text style={{color:'white'}}>Male</Text>
				        </RadioButton>
				 
				        <RadioButton value={'item2'}>
				          <Text style={{color:'white'}}>Female</Text>
				        </RadioButton>
				 
				        <RadioButton value={'item3'}>
				          <Text style={{color:'white'}}>Not Given</Text>
				        </RadioButton>
			      	</RadioGroup>

			    </View>
			    
		    </View>
		    <View style={{top:-15, left: -20}}>
		    	<View style={{flexDirection:'row', marginTop:-5}}>
				    <CheckBox
			          checked={this.state.checked}
			          onPress={() => this.setState({ checked: !this.state.checked })}
			        />
			    	<Text style={{color:'white', top: 16, left: -20}}>Please accept our Terms & Conditions</Text>
			    </View>
			</View>
			
	    </View>
    );
  }
}


const styles = StyleSheet.create({
 
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
	marginBottom:5,
},
textContainer:{
	color:'#fff',
  	fontSize:16,
  	fontWeight: '500',
},
inputStyleCal:{
	width:WIDTH - 55,
	height: 40, 
	borderRadius:25,
	paddingRight:45,
	paddingLeft:15,
	fontSize: 16,
	borderColor:'white',
	backgroundColor:'#464646',
	alignItems:'center',
},
iconStyleCal: {
	position:'absolute',
	top:10,
	right:10,
	color:'#fff',
	zIndex:99,
},
errorValidate:{
	borderColor: 'red',

}
});