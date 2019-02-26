import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground, Image, ScrollView} from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Header from '../Header/Header';



export default class LoyaltyVouchers extends Component{
    render(){
        return(

            <View>
            <Header navigation={this.props.navigation} />
                <View style={styles.loyalty_stamp_row} > 
                    <View  style={[styles.top_main_tab, styles.tab_active]}>
                        <Image style={{width: 20, height: 20, marginRight: 5,}} source={require('../../assets/images/debit-card.png')} />
                        <Text style={styles.weightfont}>Loyalty Points</Text>
                    </View>
                    <View style={styles.top_main_tab}>
                        <Image style={{width:20, height: 20, marginRight: 5,}} source={require('../../assets/images/mail.png')} />
                        <Text style={styles.fontactive}>Stamp Cards</Text>
                    </View>
                </View>
                
                <ScrollView style={styles.loyaltyScrollView}>
                    <View style={styles.container}>

                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/grocery.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Peri Peri Grill</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>12.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>564 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                <TouchableOpacity style={styles.shopbtnbottom}>
                                    <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/dominos.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Hasty Tasty Pizza</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>0.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>0 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                    <TouchableOpacity style={styles.shopbtnbottom}>
                                        <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/store_image.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Subway</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>12.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>564 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                    <TouchableOpacity style={styles.shopbtnbottom}>
                                        <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>


                    
                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/grocery.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Peri Peri Grill</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>12.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>564 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                <TouchableOpacity style={styles.shopbtnbottom}>
                                    <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/dominos.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Hasty Tasty Pizza</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>0.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>0 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                    <TouchableOpacity style={styles.shopbtnbottom}>
                                        <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/store_image.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Subway</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>12.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>564 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                    <TouchableOpacity style={styles.shopbtnbottom}>
                                        <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>


                    
                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/grocery.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Peri Peri Grill</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>12.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>564 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                <TouchableOpacity style={styles.shopbtnbottom}>
                                    <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/dominos.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Hasty Tasty Pizza</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>0.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>0 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                    <TouchableOpacity style={styles.shopbtnbottom}>
                                        <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.loyaltybox}>

                        <View style={styles.loyaltyboxleft}>
                            <ImageBackground source={require('../../assets/images/store_image.png')} style={{width: '100%', height: '100%'}}>    
                            </ImageBackground>
                        </View>
                        
                        <View style={styles.loyaltyboxright}>

                            <View style={styles.perisection}>
                                <View style={styles.perisectionleft}>
                                    <Text style={styles.grilltext}>Subway</Text>
                                    <View style={styles.milesfont}>                                        
                                        <Entypo  name="location-pin" size={25} color="grey" />
                                        <Text>12.34 miles</Text>
                                    </View>
                                </View> 
                                <View style={styles.perisectionright}>
                                    <Text style={styles.numberbold}>564 <Text style={{fontSize:14, color:'#54a6bc'}}>Points</Text></Text>
                                    <Text style={styles.worthfont}>Worth 
                                        <Text style={{fontWeight:'bold'}}> £200.00</Text>
                                    </Text>
                                </View>   
                            </View>

                            <View style={styles.bottomsshopbtn}>
                                <View style={styles.bottomsshopleft}>
                                    <Text style={styles.pratext}>12 items you can buy from your loyalty points in this store</Text>
                                </View>

                                <View style={styles.bottomsshopright}>
                                    <TouchableOpacity style={styles.shopbtnbottom}>
                                        <Text style={{color: '#fff'}}>SHOW NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>

                    

                </View>

                </ScrollView>
            
            </View>
            );
    }
}

const styles = StyleSheet.create({    
    loyalty_stamp_row: {flexDirection: 'row', flex: 1,},
    top_main_tab: {backgroundColor: '#fff', flexDirection: 'row', padding:25, justifyContent:'center', width: '50%', alignItems:'center',
        color: '#ababab', },
    tab_active: {backgroundColor: '#f6f6f6', color: 'black',},    
    fontactive: {color: '#ababab'},
    weightfont:{ fontSize:15, fontWeight: 'bold'},

    container: {margin:3, padding:5,},
    loyaltyScrollView:{marginTop:10, marginBottom:10,},
    loyaltybox: {flexDirection: 'row', borderRadius:20, overflow: 'hidden', shadowColor: '#ccc', shadowOpacity: 0.1, elevation:2,
        marginBottom:15, height:150, },
    loyaltyboxleft: { margin:0, flex: 1,},
    loyaltyboxright: { margin:0, flex: 2, flexDirection:'column',},
    perisection: {flexDirection: 'row', flex:1, padding:5, borderBottomColor:'#eee', borderBottomWidth: 1, borderStyle: 'dashed', },    
    perisectionleft: {flex: 1, overflow: 'hidden',},
    perisectionright: {flex: 1,},
    bottomsshopbtn: {flex:1, flexDirection: 'row', padding:5, alignItems: 'center'},
    bottomsshopleft: { margin:0, flex: 1,},
    bottomsshopright: { margin:0, flex: 1,},

    grilltext:{color: '#000', fontSize: 17, fontWeight: 'bold', paddingLeft:10,},
    milesfont:{color: '#6e6e6e', fontSize: 16, flexDirection:'row', alignItems:'center', },
    numberbold:{fontSize:25, fontWeight: '500', textAlign: 'right', paddingRight: 10, color:'#54a6bc',},
    worthfont:{fontSize: 12, color: '#000',  textAlign: 'right', paddingRight: 10,},
    pratext:{fontSize:11, paddingLeft:10,},
    shopbtnbottom:{borderRadius:50, backgroundColor:'#da466b', padding:8, margin:5, justifyContent:'center', alignItems:'center',},

  });