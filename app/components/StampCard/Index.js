import React, {Component} from 'react';
import {TouchableHighlight, Alert ,StyleSheet, View, TouchableOpacity, Text, ImageBackground, Image, ScrollView} from 'react-native';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import Modal from "react-native-modal";

export default class StampScreen extends Component{    

    state = {
        isModalVisible: false,
        isModalVisible_1: false,
        isModalVisible_2: false,
        isModalVisible_3: false
    };
    state = { color: 'red', status: 0 }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    _toggleModal_1 = () =>
    this.setState({ isModalVisible_1: !this.state.isModalVisible_1 });
 
    _toggleModal_2 = () =>
    this.setState({ isModalVisible_2: !this.state.isModalVisible_2 });

    _toggleModal_3 = () =>
    this.setState({ isModalVisible_3: !this.state.isModalVisible_3 });
    
    render(){
        return(

            <View>

                <View style={styles.loyalty_stamp_row} > 
                    <View  style={styles.top_main_tab}>
                        <Image style={{width: 20, height: 20, marginRight: 5,}} source={require('../../assets/images/debit-card.png')} />
                        <Text style={styles.fontactive}>Loyalty Points</Text>
                    </View>
                    <View style={[styles.top_main_tab, styles.tab_active]}>
                        <Image style={{width:20, height: 20, marginRight: 5,}} source={require('../../assets/images/mail.png')} />
                        <Text style={styles.weightfont}>Stamp Cards</Text>
                    </View>
                </View>
                
                <ScrollView style={styles.loyaltyScrollView}>
                    <View style={styles.container}>

                        <View style={styles.stampheight}>

                            <View style={styles.stampSection}>
                                <View style={styles.stampimage}>
                                    <ImageBackground source={require('../../assets/images/grocery.png')} style={{width:'100%', height: '100%'}}>    
                                    </ImageBackground>
                                </View>
                                <View style={styles.stampcontent}>
                                    <View style={styles.stampgrillpanel}>
                                        <View style={styles.stampgrillpanelleft}>
                                            <Text style={styles.grilltext}>Peri Peri Grill</Text>
                                        </View>
                                        <View style={styles.stampgrillpanelright}>
                                            <View style={styles.milesfont}>                                        
                                                <Entypo  name="location-pin" size={25} color="grey" />
                                                <Text>12 miles</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.alignmentsction}>
                                        <Text>Minimum spent: £ 5.00</Text>
                                        <Text style={[styles.numberbold, style={fontSize:13,}]}>Valid upto 12 Dec 2019</Text>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={styles.stampiconpanel}>

                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity  onPress={this._toggleModal} style={[styles.mainborderradius, styles.disableiconpanel]}>
                                        <Feather style={styles.rightcheckicon} name="check" size={17} ></Feather>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity style={[styles.mainborderradius, styles.disableiconpanel]}>
                                        <Feather style={styles.rightcheckicon} name="check" size={17} ></Feather>
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity onPress={this._toggleModal_1}  style={[styles.mainborderradius, styles.bordergreencolor]}>
                                        <Entypo style={styles.rightcheckicon}  name="price-tag" size={17} />
                                    </TouchableOpacity>
                                </View>
                                
                                <View style={[styles.stampiconcolunm, style={borderRightWidth:0,}]}>
                                    <TouchableOpacity onPress={this._toggleModal_2} style={styles.mainborderradius}>
                                    <Image style={{width:20, height:20,}} source={require('../../assets/images/scratch-image.png')} />   
                                    </TouchableOpacity>
                                </View>
                                
                            </View>

                            <View style={styles.stampiconpanel}>
                            
                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity  style={[styles.mainborderradius, styles.borderbluecolor]}>
                                        <Text style={styles.innerfont}>5</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity style={[styles.mainborderradius, styles.borderbluecolor]}>
                                        <Text style={styles.innerfont}>6</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity style={[styles.mainborderradius, styles.borderbluecolor]}>
                                        <Text style={styles.innerfont}>7</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.stampiconcolunm, style={borderRightWidth:0,}]}>
                                    <TouchableOpacity style={[styles.mainborderradius, styles.borderbluecolor]}>
                                        <Text style={styles.innerfont}>8</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>

                            <View style={styles.stampiconpanel}>
                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity style={[styles.mainborderradius, styles.borderbluecolor]}>
                                        <Text style={styles.innerfont}>9</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity style={[styles.mainborderradius, styles.borderbluecolor]}>
                                        <Text style={styles.innerfont}>10</Text> 
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.stampiconcolunm}>
                                    <TouchableOpacity style={[styles.mainborderradius, styles.borderbluecolor]}>
                                        <Text style={styles.innerfont}>11</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.stampiconcolunm, style={borderRightWidth:0,}]}>
                                    <TouchableOpacity style={[styles.mainborderradius, styles.borderbluecolor]}>
                                        <Text style={styles.innerfont}>12</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>

                            <View>
                                <Text style={styles.termsfont}>Terms and Conditions</Text>
                            </View>

                        </View>
                        

                        <Modal isVisible={this.state.isModalVisible}>

                            <View style={styles.ComponentModal}>
                                <View style={[styles.stampiconcolunm, style={borderRightWidth:0,}]}>                                    
                                    <TouchableOpacity style={[styles.mainborderradius, styles.disableiconpanel]}>
                                        <Feather style={styles.rightcheckicon} name="check" size={17} ></Feather>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.modalbottomcontent}>
                                    <Text style={styles.usedtextcolor}>This stamp has been used</Text>
                                    <Text style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                                        You used this stamp on 1 Jan 2019 at 5:30pm and got £ 2.00 discount on your purchase
                                    </Text>
                                </View> 
                            </View>

                            <View style={{flexDirection:'row'}}>                                    
                                <View style={[styles.modalbtnpanel,  style={backgroundColor:'#017218',}]}>
                                    <TouchableOpacity style={[styles.shopbtnbottom, style={backgroundColor:'#017218',}]} onPress={this._toggleModal} >
                                        <Text style={{color: '#fff', fontSize:18, fontWeight:'bold',}}>ORDER NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        
                        </Modal>

                        <Modal isVisible={this.state.isModalVisible_1}>

                            <View style={styles.ComponentModal}>                               

                                <View style={[styles.stampiconcolunm, style={borderRightWidth:0,}]}>                                    
                                    <TouchableOpacity style={[styles.mainborderradius, styles.bordergreencolor]}>
                                        <Entypo style={styles.rightcheckicon}  name="price-tag" size={17} />                             
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.modalbottomcontent}>
                                    <Text style={styles.usedtextcolor}>This stamp has not been redeemed!</Text>
                                    <Text style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>You unlocked this stamp on 3rd Jan 2019 at 2:30pm and can get a T-Shirt from this store until 22 Jan 2019.</Text>
                                </View> 
                                
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <View style={styles.modalbtnpanel}>
                                    <TouchableOpacity style={styles.shopbtnbottom} onPress={this._toggleModal_1} >
                                        <Text style={{color: '#fff', fontSize:18, fontWeight:'bold',}}>ORDER NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        
                        </Modal>

                        <Modal isVisible={this.state.isModalVisible_2}>

                            <View style={{position: 'absolute', zIndex:101, marginTop:0, paddingBottom:20, width:'100%'}}>

                                <View style={styles.modalbeforetext}>
                                    <Text style={[styles.grilltext, style={color: '#fff', justifyContent:'center', alignItems:'center', textAlign:'center'}]}>
                                        Scratch this stamp to unlock your reward!
                                    </Text>
                                </View>

                                <View style={[styles.ComponentModal, style={marginTop:0, paddingBottom:100, backgroundColor:'#da466b'}]}>                                

                                    <View style={{flexDirection:'row'}}>
                                        <View style={[style.mainborderradius, styles.scrachmodalpanel, style={backgroundColor:'none',}]}>
                                            <TouchableOpacity  onPress={this._toggleModal_3} style={[styles.shopbtnbottom, style={padding:0,}]}>
                                                <Image style={{width:130, height:130,}} source={require('../../assets/images/scratch-image.png')} />   
                                            </TouchableOpacity>
                                        </View>
                                    </View>                               
                                    
                                </View>
                            
                            </View>

                            <View style={[style.modalbtnpanel, style={marginTop:0, top:32, zIndex:100,}]}>                                    
                                <Image style={{width:50, height:50,}} source={require('../../assets/images/happy-offer.png')} />                                                                          
                            </View>

                            <View style={[styles.ComponentModal, style={paddingTop:15,}]}>                                
                                <View style={styles.modalbottomcontent}>
                                    <View>
                                        <Text style={{color:'#54a6bc', fontSize:35, fontWeight:'bold'}}>
                                            YAY! <Image style={{width:25, height:25, paddingTop:5,}} source={require('../../assets/images/happy-offer.png')} />
                                        </Text>                                        
                                    </View>

                                    <Text style={[styles.usedtextcolor, style={paddingTop:0, alignItems:'center', justifyContent:'center', textAlign:'center'}]}>
                                        You have unlocked this stamp successfully!
                                    </Text>
                                    <Text style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                                        You have earned a £2.00 voucher from this store.
                                    </Text>
                                </View> 
                                
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <View style={styles.modalbtnpanel}>
                                    <TouchableOpacity style={styles.shopbtnbottom} onPress={this._toggleModal_2} >
                                        <Text style={{color: '#fff', fontSize:18, fontWeight:'bold',}}>SHOP NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        
                        </Modal>
                        
                        <Modal isVisible={this.state.isModalVisible_3}>
                            <View style={[style.modalbtnpanel, style={marginTop:0, top:32, zIndex:100, left:59,}]}>                                    
                                <Image style={{width:50, height:50,}} source={require('../../assets/images/happy-offer.png')} />                                                                          
                            </View>

                            <View style={[styles.ComponentModal, style={paddingTop:15,}]}>                                
                                <View style={styles.modalbottomcontent}>
                                    <View>
                                        <Text style={{color:'#54a6bc', fontSize:35, fontWeight:'bold'}}>
                                            YAY! <Image style={{width:25, height:25, paddingTop:5,}} source={require('../../assets/images/happy-offer.png')} />
                                        </Text>                                        
                                    </View>

                                    <Text style={[styles.usedtextcolor, style={paddingTop:0, alignItems:'center', justifyContent:'center', textAlign:'center'}]}>
                                        You have unlocked this stamp successfully!
                                    </Text>
                                    <Text style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                                        You have earned a £2.00 voucher from this store.
                                    </Text>
                                </View> 
                                
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <View style={styles.modalbtnpanel}>
                                    <TouchableOpacity style={styles.shopbtnbottom} onPress={this._toggleModal_3} >
                                        <Text style={{color: '#fff', fontSize:18, fontWeight:'bold',}}>SHOP NOW</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        
                        </Modal>
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
   
    stampheight:{height:435, borderRadius:20, overflow:'hidden', shadowColor: '#f9f9f9', shadowOpacity: 0.5, elevation:5,
    marginBottom:15, marginTop:20, backgroundColor:'#fff'},

    grilltext:{color: '#000', fontSize: 17, fontWeight: 'bold',},
    milesfont:{color: '#6e6e6e', fontSize: 16, flexDirection:'row',},
    milesfontfull:{flex:1,},
    numberbold:{fontSize:25, fontWeight: '500', color:'#54a6bc',},
    worthfont:{fontSize: 12, color: '#000',},
    pratext:{fontSize:11,},

    shopbtnbottom:{borderRadius:50, backgroundColor:'#da466b', padding:8, margin:5, justifyContent:'center', alignItems:'center',},
    stampSection:{flexDirection: 'row', borderBottomColor:'#eee', borderBottomWidth: 1, borderStyle: 'dashed',},
    stampimage:{flex:1, height:100,overflow:'hidden'},
    stampcontent:{flex:2,},
    stampgrillpanel:{flexDirection:'row', padding:10, paddingBottom:0,},    
    stampgrillpanelleft: {flex: 1, overflow:'hidden',},
    stampgrillpanelright: {flex: 1, alignItems:'center', alignItems: 'flex-end',},
    alignmentsction:{ flex: 1, padding:10, paddingTop:5,},

    stampiconpanel:{flexDirection:'row', borderBottomColor:'#eee', borderBottomWidth: 1, borderStyle: 'dashed',},
    stampiconcolunm:{flex:1, borderRightColor:'#eee', borderRightWidth: 1, padding:20, justifyContent:'center', alignItems:'center'},
    mainborderradius:{width:55, height: 55, borderRadius:50, borderColor:'#eca1b4', borderWidth: 5, backgroundColor:'#ff1b1b',
        justifyContent: 'center', alignItems: 'center', },
    rightcheckicon:{color:'#fff', flexDirection:'row', fontWeight:'bold'},
    bordergreencolor:{borderColor:'#7eb789', borderWidth: 5, backgroundColor:'#017218',},
    borderbluecolor:{borderColor:'#99d6e6', borderWidth: 5, backgroundColor:'#54a6bc',},
    innerfont:{fontSize:20, fontWeight:'bold', color:'#fff'},
    termsfont:{color:'#54a6bc', justifyContent: 'center', alignItems:'center', paddingTop:10, textAlign:'center',},
    disableiconpanel:{backgroundColor:'#da466b',},
    ComponentModal:{backgroundColor:"#fff",borderRadius:5, paddingTop:35, justifyContent:'center', alignItems:'center',
        paddingLeft:20, paddingBottom:45, paddingRight:20, position:'relative',},
    modalbottomcontent:{justifyContent:'center', alignItems:'center', textAlign: 'center', width:'100%'},
    usedtextcolor:{color:'#da466b', fontSize:18, paddingTop:10, paddingBottom:10, justifyContent:'center', 
    alignItems:'center', textAlign:'center'},

    modalbtnpanel:{borderRadius:50, backgroundColor:'#da466b', padding:5, margin:5, justifyContent:'center', alignItems:'center',
        width:'50%', position:'absolute', left:0, right:0, marginTop:-35, marginBottom:0, marginRight:'auto', marginLeft:'20%'},
   
    modalbeforetext:{justifyContent:'center', alignItems:'center', padding:15, fontSize:16, margin:10, marginBottom:0,},
    scrachmodalpanel:{width:'auto', height: 'auto', justifyContent: 'center', alignItems: 'center', borderWidth:0, backgroundColor:'green'},
  });