import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Header from '../Header/Header';
import TopSearchBox from './TopSearchBox'
import OfferNearYou from './OfferNearYou'
import ProductWarp from './ProductWarp'




export default class NearbyDeals extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <TopSearchBox />
          <OfferNearYou />
          <ProductWarp />   
        </ScrollView>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
