import React from 'react';
import {AppRegistry, Image, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

export default class ProductWarp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.box}>
            <View style={styles.righttop}>
              <ImageBackground source={require('../../assets/images/bgoffer.png')} style={{width: '100%', height: '100%', justifyContent: 'center',
                alignItems: 'center',}}>
                <Text style={styles.pertxt}>60 %</Text>
                <Text style={styles.offtxt}>Off</Text>
              </ImageBackground>
            </View>
            <Image style={styles.image} source={require('../../assets/images/product1.jpg')} />
            <View style={styles.contentbox}>
              <View style={styles.topbox}>
                <Text style={styles.lefttxt}>£ 144.00</Text>
                <Text style={styles.righttxt}> £ 57.6 </Text>
              </View>
              <Text style={styles.nameheading}>Mixer</Text>
              <View style={styles.ratingwp}>
                <StarRating fullStarColor={'#ed8a19'}
                  emptyStarColor= {'#ed8a19'}
                  starSize= {16}
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating) }
                />
              </View>
              <Text style={styles.pera}>Russell Hobbs RHM2076B 20 L Digital 800 w Solo Microwave Black</Text>
              <View style={styles.bottombox}>
                <Text style={styles.storebox}><MaterialCommunityIcons name="store" style={{color: '#fff', fontSize: 14,}} /> From Store A  </Text>
                <Text style={styles.distancebox}> <Entypo name="location-pin" style={{color: '#fff', fontSize: 14,}} /> 1.5km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.righttop}>
              <ImageBackground source={require('../../assets/images/bgoffer.png')} style={{width: '100%', height: '100%', justifyContent: 'center',
                alignItems: 'center',}}>
                <Text style={styles.pertxt}>60 %</Text>
                <Text style={styles.offtxt}>Off</Text>
              </ImageBackground>
            </View>
            <Image style={styles.image} source={require('../../assets/images/product2.jpg')} />
            <View style={styles.contentbox}>
              <View style={styles.topbox}>
                <Text style={styles.lefttxt}>£ 144.00</Text>
                <Text style={styles.righttxt}> £ 57.6 </Text>
              </View>
              <Text style={styles.nameheading}>Juicer</Text>
              <View style={styles.ratingwp}>
                <StarRating fullStarColor={'#ed8a19'}
                  emptyStarColor= {'#ed8a19'}
                  starSize= {16}
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating) }
                />
              </View>
              <Text style={styles.pera}>Russell Hobbs RHM2076B 20 L Digital 800 w Solo Microwave Black</Text>
              <View style={styles.bottombox}>
                <Text style={styles.storebox}><MaterialCommunityIcons name="store" style={{color: '#fff', fontSize: 12,}} /> From Store A  </Text>
                <Text style={styles.distancebox}> <Entypo name="location-pin" style={{color: '#fff', fontSize: 12,}} /> 1.5km</Text>
              </View>
            </View>
          </View>
        </View> 
        <Text style={styles.heading}>Found 144 products in Men's Fashion</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <View style={styles.righttop}>
              <ImageBackground source={require('../../assets/images/bgoffer.png')} style={{width: '100%', height: '100%', justifyContent: 'center',
                alignItems: 'center',}}>
                <Text style={styles.pertxt}>60 %</Text>
                <Text style={styles.offtxt}>Off</Text>
              </ImageBackground>
            </View>
            <Image style={styles.image} source={require('../../assets/images/product5.jpg')} />
            <View style={styles.contentbox}>
              <View style={styles.topbox}>
                <Text style={styles.lefttxt}>£ 57.00</Text>
                <Text style={styles.righttxt}> £ 5.6 </Text>
              </View>
              <Text style={styles.nameheading}>Cotton T Shirt</Text>
              <View style={styles.ratingwp}>
                <StarRating fullStarColor={'#ed8a19'}
                  emptyStarColor= {'#ed8a19'}
                  starSize= {16}
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating) }
                />
              </View>
              <Text style={styles.pera}>Russell Hobbs RHM2076B 20 L Digital 800 w Solo Microwave Black</Text>
              <View style={styles.bottombox}>
                <Text style={styles.storebox}><MaterialCommunityIcons name="store" style={{color: '#fff', fontSize: 14,}} /> From Store A  </Text>
                <Text style={styles.distancebox}> <Entypo name="location-pin" style={{color: '#fff', fontSize: 14,}} /> 1.5km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <Image style={styles.image} source={require('../../assets/images/product6.jpg')} />
            <View style={styles.contentbox}>
              <View style={styles.topbox}>
                <Text style={styles.lefttxt}>£ 76.00</Text>
                <Text style={styles.righttxt}> £ 7.6 </Text>
              </View>
              <Text style={styles.nameheading}>Hoodie Sweatshirt</Text>
              <View style={styles.ratingwp}>
                <StarRating fullStarColor={'#ed8a19'}
                  emptyStarColor= {'#ed8a19'}
                  starSize= {16}
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating) }
                />
              </View>
              <Text style={styles.pera}>Russell Hobbs RHM2076B 20 L Digital 800 w Solo Microwave Black</Text>
              <View style={styles.bottombox}>
                <Text style={styles.storebox}><MaterialCommunityIcons name="store" style={{color: '#fff', fontSize: 12,}} /> From Store A  </Text>
                <Text style={styles.distancebox}> <Entypo name="location-pin" style={{color: '#fff', fontSize: 12,}} /> 1.5km</Text>
              </View>
            </View>
          </View>
        </View> 
        <View style={styles.row}>
          <View style={styles.box}>
            <Image style={styles.image} source={require('../../assets/images/product6.jpg')} />
            <View style={styles.contentbox}>
              <View style={styles.topbox}>
                <Text style={styles.lefttxt}>£ 57.00</Text>
                <Text style={styles.righttxt}> £ 5.6 </Text>
              </View>
              <Text style={styles.nameheading}>Cotton T Shirt</Text>
              <View style={styles.ratingwp}>
                <StarRating fullStarColor={'#ed8a19'}
                  emptyStarColor= {'#ed8a19'}
                  starSize= {16}
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating) }
                />
              </View>
              <Text style={styles.pera}>Russell Hobbs RHM2076B 20 L Digital 800 w Solo Microwave Black</Text>
              <View style={styles.bottombox}>
                <Text style={styles.storebox}><MaterialCommunityIcons name="store" style={{color: '#fff', fontSize: 14,}} /> From Store A  </Text>
                <Text style={styles.distancebox}> <Entypo name="location-pin" style={{color: '#fff', fontSize: 14,}} /> 1.5km</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.righttop}>
              <ImageBackground source={require('../../assets/images/bgoffer.png')} style={{width: '100%', height: '100%', justifyContent: 'center',
                alignItems: 'center',}}>
                <Text style={styles.pertxt}>60 %</Text>
                <Text style={styles.offtxt}>Off</Text>
              </ImageBackground>
            </View>
            <Image style={styles.image} source={require('../../assets/images/product5.jpg')} />
            <View style={styles.contentbox}>
              <View style={styles.topbox}>
                <Text style={styles.lefttxt}>£ 76.00</Text>
                <Text style={styles.righttxt}> £ 7.6 </Text>
              </View>
              <Text style={styles.nameheading}>Hoodie Sweatshirt</Text>
              <View style={styles.ratingwp}>
                <StarRating fullStarColor={'#ed8a19'}
                  emptyStarColor= {'#ed8a19'}
                  starSize= {16}
                  disabled={false}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={(rating) => this.onStarRatingPress(rating) }
                />
              </View>
              <Text style={styles.pera}>Russell Hobbs RHM2076B 20 L Digital 800 w Solo Microwave Black</Text>
              <View style={styles.bottombox}>
                <Text style={styles.storebox}><MaterialCommunityIcons name="store" style={{color: '#fff', fontSize: 12,}} /> From Store A  </Text>
                <Text style={styles.distancebox}> <Entypo name="location-pin" style={{color: '#fff', fontSize: 12,}} /> 1.5km</Text>
              </View>
            </View>
          </View>
        </View>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  heading: {fontSize: 20, lineHeight: 28, color: '#000', marginTop: 20, marginBottom: 20, marginLeft: 10, marginRight:10, textAlign: 'left',},
  box: {
    flex: 1,
    backgroundColor: '#54a6bc',
    margin: 8,
    borderRadius: 10,
    position: 'relative',
  },
  righttop: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: -15,
    top: -20,
    zIndex: 9,
    borderRadius: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pertxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  offtxt: {
    color: '#fff',
    fontSize: 9,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentbox: {
    padding: 5,
    color: '#fff',
  },
  topbox: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  lefttxt: {
    color: '#fff',
    fontSize: 12,
    textDecorationLine: 'line-through'
  },
  righttxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nameheading: {fontSize: 18, color: '#fff', fontWeight: 'bold'},
  pera: {fontSize: 12, color: '#fff', flexDirection: 'row', marginTop: 10, marginBottom: 10,}, 
  bottombox: {flexDirection: 'row', justifyContent: 'space-between',},
  storebox: {fontSize: 12, color: '#fff',},
  distancebox: {fontSize: 12, color: '#fff',},
  ratingwp: {justifyContent: 'space-between', flexDirection: 'row', flex: 1, }
});