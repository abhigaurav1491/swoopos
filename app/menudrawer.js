import React, {Component} from 'react';
import {Image,TouchableOpacity, View , Text,ScrollView , ImageBackground, StyleSheet, Platform,Dimensions} from 'react-native';
import { Ionicons, Entypo, FontAwesome ,  MaterialCommunityIcons,MaterialIcons} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends Component {

  navLink(nav, text, icon){

      return(
          <TouchableOpacity  onPress={() => {this.props.navigation.navigate(nav)}}>
          <View style={styles.linkbox}>
          <View style={styles.linkimgicon}><Image source={icon} style={{width: 24, height: 24, resizeMode: 'contain',  }} /></View>
            <Text style={styles.link}>
                    {text}
            </Text>
          </View>
          </TouchableOpacity>
      )
  }
  render() {
  let icon1 = require("./assets/images/icons/debit_card_icon.png");    
  let icon2 = require("./assets/images/icons/shopping_bag_icon.png"); 
  let icon3 = require("./assets/images/icons/envelope_icon.png");    
  let icon4 = require("./assets/images/icons/favorite_heart_icon.png"); 
  let icon5 = require("./assets/images/icons/share_icon.png");    
  let icon6 = require("./assets/images/icons/credit_cards_icon.png"); 
  let icon7 = require("./assets/images/icons/map_icon.png");    
  let icon8 = require("./assets/images/icons/settings_work_icon.png"); 
  let icon9 = require("./assets/images/icons/group_icon.png");    
  let icon10 = require("./assets/images/icons/logistics_delivery_truck_icon.png"); 
  let icon11 = require("./assets/images/icons/food_icon.png");    
  let icon12 = require("./assets/images/icons/payment_method_icon.png");
  let icon13 = require("./assets/images/icons/tags_icon.png");  
    return (
     <ScrollView>
          <View style={styles.container}>
            <View style={styles.topLinks}>
                  <View style={styles.profile}>
                    <View style={styles.imgmbox}>
                      <View style={styles.imgView}>
                        <Image style={styles.imgContents}  source={require("./assets/images/product6.jpg")}  /> 
                      </View>
                      <TouchableOpacity style={styles.editiconbtn}>
                        <MaterialIcons name="mode-edit" size={26} color='#fff' />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.welcomeText}>
                        <Text style={styles.welcomeTextContent}>John Smith</Text>
                        <Text style={styles.welcomeTextColor}>13, South Avenue, Birmingham BM1 8789</Text>
                    </View>
                  </View>
            </View>
            <View style={styles.bottomLinkks}>
                  {this.navLink('LandingPage',  'Loyalty Points & Vouchers' , icon1) }
                  {this.navLink('LoyaltyVouchers','My Orders' , icon2)}
                  {this.navLink('NearbyDeals','Messages' , icon3)}
                  {this.navLink('ProductCategorySearch','My Favourites', icon4)}
                  {this.navLink('ProductSearchResult','Invite Friends' , icon5)}
                  {this.navLink('StampCard','Payment Details' , icon6)}
                  {this.navLink('StoresCategoryResult','Addresses', icon7)}
                  {this.navLink('StoreSearchResult','Settings' , icon8)}
            </View>
            <View style={styles.lineheadingwp}>
              <Text style={styles.lineheadingtxt}> I Want to</Text>
              <View style={styles.lineheading}></View>
            </View>
            <View style={styles.bottomLinkks}>
                  {this.navLink('CategoriesFilter','Order for Collection', icon9) }
                  {this.navLink('Order for Delivery','Order for Delivery', icon10)}
                  {this.navLink('Order to Table','Order to Table', icon11)}
                  {this.navLink('pay and go','Pay & Go', icon12)}
                  {this.navLink('Nearby Deals','Nearby Deals', icon13)}
            </View>
      </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
profile:{
    alignItems:'center',
    margin: 10,
},
imgView:{
    borderRadius:110,
    overflow:'hidden',
    borderWidth:3,
    borderColor:'#54a6bc',
    marginTop:20,
    marginBottom: 5,
},
imgContents:{
    width:110,
    height:110,
},

welcomeText:{
  
},
welcomeTextContent:{
    fontSize:20,
    color:'#000',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'stretch',
},
welcomeTextColor:{
  fontSize:16,
  color: '#000',
  textAlign: 'center',
  lineHeight: 23,
},
topLinks:{
  justifyContent:'center',
  alignItems: 'center',

},
bottomLinks:{
    marginTop:30,
},
link:{   
   fontSize:14,   
   textAlign:'left',
   color:'#000',
   
},
linkbox: {
  borderTopWidth:1,
  borderTopColor:'#f1f1f1',
  padding:10,
  flexDirection: 'row',
  alignItems: 'center',

},
activeLink:{
    backgroundColor:'#f7c04b',
    fontWeight:'bold',
    color:'#505050',
},
lineheadingwp: {
  position: 'relative',
  padding: 10,
  marginBottom: 10,
},
lineheadingtxt: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#000',
},
lineheading: {
  position: 'absolute',
  right: 0,
  top: 27,
  width: 150,
  height: 1,
  backgroundColor: '#f1f1f1'
},
linkimgicon: {
  marginRight: 15,
  justifyContent:'center',
  alignItems: 'center',
},
imgmbox: {
  position: 'relative',
},
editiconbtn: {
  backgroundColor: '#da466b',
  width: 40,
  height: 40,
  position: 'absolute',
  bottom: 0,
  right: 0,
  justifyContent:'center',
  alignItems: 'center',
  borderRadius: 50,
}

});