import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

export default class StoreScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3
        };
      }
     
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }

    render(){        
        return(
           <View>                               
                <View style={styles.boxsection}>
                   
                    <View style={styles.leftsection}>
                        <Image
                            style={{width:'100%', height: '100%',}}
                            source={require('../../assets/images/store_image.png')}
                        />
                    </View>
                    <View style={styles.middletsection}>

                        <View style={styles.borderbottom}>
                            <Text style={styles.subheading} style={{fontSize:19, fontWeight: 'bold'}}>Lina Stores</Text>
                            <Text style={{paddingBottom: 23, fontSize: 12,}}>Groceries</Text>                         

                            <View style={styles.iconsection}>
                                <View>
                                    <Image
                                        style={{width:25, height: 15,}}
                                        source={require('../../assets/images/delivery-van.png')}
                                    />
                                </View>
                                <View><Text style={styles.icontext}>Free Home Delivery</Text></View>
                            </View>                        
                        </View>

                        <View  style={styles.bottomsection}>
                            <View>
                                <Image
                                    style={{width:20, height: 20,}}
                                    source={require('../../assets/images/discount.png')}
                                />
                            </View>
                            <View><Text style={{fontSize:14, marginLeft: 10,}}>12 Offers</Text></View>
                        </View>                                                
                    </View>
                    
                    <View style={styles.rightsection}>
                        <View  style={styles.borderbottom}>
                            <Text style={styles.opendiv}>                              
                                <Text>
                                    <MaterialCommunityIcons style={styles.doticon} name="circle-medium" color="green" />  
                                    <Text>Open</Text>
                                </Text>                   
                            </Text>  
                                          
                            <Text style={{fontWeight:'normal', textAlign: 'right'}}>9am - 8pm</Text>
                            
                            <View style={styles.starpanel}>                               
                                <StarRating fullStarColor={'#ed8a19'} emptyStarColor= {'#ed8a19'} starSize= {16} disabled={false}
                                    maxStars={5} rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating) }
                                />                                               
                            </View>

                        </View>
                        <View>
                            <View style={styles.locationpin}>
                                <Text style={{fontSize:14,}}><Entypo name="location-pin" size={20} color="grey" /> 1.5km</Text>
                            </View>                           
                        </View>
                    </View>
                
                </View>

                <View style={styles.boxsection}>
                    <View style={styles.leftsection}>
                        <Image
                            style={{width:'100%', height: '100%',}}
                            source={require('../../assets/images/dominos.png')}
                        />
                    </View>
                    
                    <View style={styles.middletsection}>

                        <View style={styles.borderbottom}>
                            <Text style={styles.subheading}>Domino`s Pizza</Text>
                            <Text style={styles.storesubtext}>Food & Drinks</Text>                         

                            <View style={styles.iconsection}>
                                <View>
                                    <Image
                                        style={{width:25, height: 15, marginTop:3,}}
                                        source={require('../../assets/images/delivery-van.png')}
                                    />
                                </View>
                                <View><Text style={styles.icontext}>Free Home Delivery</Text></View>
                            </View>                        
                        </View>

                        <View  style={styles.bottomsection}>
                            <View>
                                <Image
                                    style={{width:20, height: 20,}}
                                    source={require('../../assets/images/discount.png')}
                                />
                            </View>
                            <View><Text style={{fontSize:14, marginLeft: 10,}}>12 Offers</Text></View>
                        </View>
                        
                    </View>
                    
                    <View style={styles.rightsection}>                        
                        <View  style={styles.borderbottom}>
                            <Text style={styles.opendiv}>                              
                                <Text>
                                    <MaterialCommunityIcons style={styles.doticon} name="circle-medium" color="red" />  
                                    <Text>Opening Soon</Text>
                                </Text>                   
                            </Text>  
                                                
                            <Text style={{fontWeight:'normal', textAlign: 'right'}}>9am - 8pm</Text>
                            <View style={styles.starpanel}>
                                <StarRating fullStarColor={'#ed8a19'} emptyStarColor= {'#ed8a19'} starSize= {16} disabled={false}
                                    maxStars={5} rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating) }
                                />                                                               
                            </View>
                        </View>

                        <View> 
                            <View style={styles.locationpin}>
                                <Text style={{fontSize:14,}}><Entypo name="location-pin" size={20} color="grey" /> 1.5km</Text>
                            </View>                           
                        </View>

                    </View>
                
                </View>

                <View style={styles.boxsection}>
                   
                    <View style={styles.leftsection}>
                        <Image
                            style={{width:'100%', height: '100%',}}
                            source={require('../../assets/images/grocery.png')}
                        />
                    </View>

                    <View style={styles.middletsection}>

                        <View style={styles.borderbottom}>
                            <Text style={styles.subheading}>TFC Supermarket</Text>
                            <Text style={styles.storesubtext}>Men's Fashion</Text>                         

                            <View style={styles.iconsection}>
                                <View>
                                    <Image
                                        style={{width:25, height: 15, marginTop:3,}}
                                        source={require('../../assets/images/delivery-van.png')}
                                    />
                                </View>
                                <View><Text style={styles.icontext}>Free Home Delivery</Text></View>
                            </View>                        
                        </View>

                        <View  style={styles.bottomsection}>
                            <View>
                                <Image
                                    style={{width:20, height: 20,}}
                                    source={require('../../assets/images/discount.png')}
                                />
                            </View>
                            <View><Text style={{fontSize:14, marginLeft: 10,}}>12 Offers</Text></View>
                        </View>
                        
                    </View>
                    
                    <View style={styles.rightsection}>
                        <View  style={styles.borderbottom}>
                            <Text style={styles.opendiv}>                              
                                <Text> 
                                    <Text>Open</Text>
                                </Text>                   
                            </Text>  
                                                
                            <Text style={{fontWeight:'normal', textAlign: 'right'}}>9am - 8pm</Text>
                            <View style={styles.starpanel}>                                
                                <StarRating fullStarColor={'#ed8a19'} emptyStarColor= {'#ed8a19'} starSize= {16} disabled={false}
                                    maxStars={5} rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating) }
                                />
                            </View>
                        </View>
                        <View>
                            <View style={styles.locationpin}>
                                <Text style={{fontSize:14,}}><Entypo name="location-pin" size={20} color="grey" /> 1.5km</Text>
                            </View>                            
                        </View>
                    </View>
                
                </View>

            </View> 
        );
    }
}

const styles = StyleSheet.create({
  Storeheading: {fontSize: 20, padding:12,},
    boxsection: {width: '97%', height: 129, backgroundColor: '#fff', marginLeft: 'auto', marginRight: 'auto', flexDirection:'row',
    borderRadius:20, overflow: 'hidden', marginBottom: 20, shadowColor: '#ccc', shadowOpacity: 0.1, elevation:2},
    storesubtext:{fontSize: 12},
    leftsection: {width: '28%', padding: 0,},
    middletsection: {width: '38%', paddingLeft:10},
    rightsection: { width: '35%',  paddingRight: 15, textAlign:'right',},
    subheading: {fontSize: 19, color: 'black', fontWeight: 'bold', width:'100%', flexDirection: 'row'},
    iconsection: {flexDirection: 'row', marginTop: 4,},
    icontext: {fontSize: 12, color: 'black', marginLeft: 5,},
    bordernone:{borderBottomWidth: 0,},
    opendiv:{fontSize:14, fontWeight:'bold', flexDirection:'row', textAlign: 'right', justifyContent:'space-between', paddingTop: 2,},
    starpanel:{textAlign: 'right', flexDirection: 'row', marginTop:28, paddingBottom:5, justifyContent:'flex-end',},
    locationpin:{textAlign: 'right', flexDirection:'row',  marginTop:5, justifyContent:'flex-end',},
    bottomsection:{ flexDirection: 'row', marginTop:5,},
    borderbottom:{borderBottomColor:'#eee', borderBottomWidth: 1, borderStyle: 'dashed', paddingBottom: 5, height:95,},
    marginBottomAlign:{marginBottom: 20,},
    starRightAlign:{position: 'absolute', right: 0}
});
