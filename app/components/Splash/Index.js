import React from 'react';
import { StyleSheet, Text, View ,ImageBackground, Image, Dimensions,SafeAreaView ,TouchableHighlight, AppRegistry } from 'react-native';
import Carousel from 'react-native-carousel-view';
const {height : HEIGHT } = Dimensions.get("window");

export default class Splash extends React.Component {
 
 componentWillMount(){
    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen');
    },6000);
  }

  render() {

    return (
        <SafeAreaView>
        <ImageBackground source={require('../../assets/images/splash-bg.jpg')} style={styles.container}> 
        	<View style={styles.splashlogo}> 
        		<Image  source={require('../../assets/images/logoblue.png')} />
        	</View>
        	<View style={styles.splashslide}> 
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={styles.container}>
                <Carousel
                  height={350}
                  delay={2000}
                  indicatorAtBottom={true}
                  indicatorSize={20}
                  indicatorColor= '#53b7c6'
                  inactiveIndicatorColor="#fff"
                  >
                  <View style={styles.contentContainer}>
                    <View style={styles.imgbox}>
                      <Image style={styles.img} source={require('../../assets/images/s1.png')} />
                    </View>
                    <Text style={styles.contenttxt}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                  </View>
                  <View style={styles.contentContainer}>
                    <View style={styles.imgbox}>
                      <Image style={styles.img} source={require('../../assets/images/s1.png')} />
                    </View>
                    <Text style={styles.contenttxt}>Lorem Ipsum has been the industry's standard dummy</Text>
                  </View>
                  <View style={styles.contentContainer}>
                    <View style={styles.imgbox}>
                      <Image style={styles.img} source={require('../../assets/images/s1.png')} />
                    </View>
                    <Text style={styles.contenttxt}>Industry's standard dummy text ever since the 1500s</Text>
                  </View>
                </Carousel>
              </View>
            </View>
        	</View>          
        </ImageBackground>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  splashlogo: {
  	margin: 10,
  },
  splashslide: {
  	padding: 10,
  	width: '80%',
    marginTop: 20,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgbox: {
    backgroundColor: '#fff',
    height: 200,
    width: 200,
    padding: 10,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  img: {
    width: 150,
    height: 150,
  },
  contenttxt: {
    color: '#fff',
    fontSize: 16,
    padding: 20,
    textAlign: 'center',
  }
 
});