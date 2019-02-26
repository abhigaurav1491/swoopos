import React, {Component} from 'react';
import {StyleSheet, Button, Text, View, TextInput,Dimensions,ImageBackground} from 'react-native';
import { Ionicons, FontAwesome,MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

import Header from './Header';
import Footer from './Footer';

const {width : WIDTH } = Dimensions.get("window");
export default class FormContent extends Component {
  constructor(props) {
  super(props);
  this.state = {
    date:'',
    checked: false,
    clicked: false,
    name:null,
    email:null,
    mobile:null,
    refCode:null,
    dob:null,
  errorname:'',
  errorEmail:'',
  errorMobile:'',
  errorRefCode:'',
  errorDob:'',
  data:[],
  };
}

  validateInput = (type) => {
    switch(type){
      case "name":
        if(!this.state.name){
          this.setState({
            errorname: 'This Field is required',
          });
        }else{
          this.setState({
            errorname: '',
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

  render() {
    return (
      <ImageBackground 
        source={require('../../assets/bgImg.png')}
        style={styles.container}
        >
          <View style={styles.contentContainer}>
            <Header navigation={this.props.navigation} />
      <View style={{flex: 2.5}}>
        <View style={styles.inputContainer}>
           <TextInput
              style={!this.state.errorname?styles.inputStyle:styles.inputStyleError}
              placeholder='Your Name'
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}
              onBlur={() => this.validateInput('name')}
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
        
        <DatePicker
          style={{width:WIDTH - 55}}
          date={this.state.date}
          mode="date"
          placeholder='Date of Birth'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          format="YYYY-MM-DD"
          iconComponent={
                <FontAwesome 
                size={18}
                color='#fff' 
                name='calendar' 
                style={{position:'absolute',
            right:10,
            color:'#fff',
            zIndex:99,
          }}
                /> 
             }
          customStyles={{
          
          dateInput: {
            height: 40, 
            borderRadius:25,
            paddingRight:45,
            paddingLeft:45,
            fontSize: 16,
            borderWidth:0,
            backgroundColor:'#464646',
            alignItems:'flex-start',
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.textContainer}>Gender</Text>
         <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
  
            <RadioGroup 
            style={{flexDirection:'row', marginTop: -5}}
            color='white' 
            onSelect = {this.onSelectGender}>
                <RadioButton style={{highlightColor:'white'}} value={'male'} >
                  <Text style={{color:'white'}}>Male</Text>
                </RadioButton>
         
                <RadioButton value={'female'}>
                  <Text style={{color:'white'}}>Female</Text>
                </RadioButton>
         
                <RadioButton value={'other'}>
                  <Text style={{color:'white'}}>Not Given</Text>
                </RadioButton>
              </RadioGroup>

          </View>
          
        </View>
        <View style={{top:-15, left: -20}}>
          <View style={{flexDirection:'row', marginTop:-5}}>
            <CheckBox
                checked={this.state.checked}
                onPress={this.ontncPress }
              />
            <Text style={{color:'white', top: 16, left: -20}}>Please accept our Terms & Conditions</Text>
          </View>
      </View>
      
      </View>
      <Footer userData={this.state.data} navigation={this.props.navigation} />
          </View>
    </ImageBackground>
    );
  }
  ontncPress = () => {
    this.setState({
      checked: !this.state.checked,
    })
    if(!this.state.checked){
      this.setState({
        data: {
          mobile: this.state.mobile,
          email: this.state.email,
          dob: this.state.date,
          gender: this.state.gender,
          name: this.state.name,
          refCode: this.state.refCode,
          checked: this.state.checked,
        }
      })
    }
  };

  onSelectGender = (value) => {
    if(value == 0)
      this.setState({gender: 'Male'})
    if(value == 1)
      this.setState({gender: 'Female'})
    if(value == 2)
      this.setState({gender: 'Other'})
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
  marginBottom:5,
},
textContainer:{
  color:'#fff',
    fontSize:16,
    fontWeight: '500',
},
inputStyleCal:{
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