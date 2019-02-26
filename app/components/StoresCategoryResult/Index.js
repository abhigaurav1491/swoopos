import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import TopSearchBox from './TopSearchBox'
import PayAndGo from './PayAndGo'
import Tags from './Tags'
import NearYou from './NearYou'
import ProductGrid from './ProductGrid'
import ChangeCategory from './ChangeCategory'
import Heading from './Heading'
import StoreScreen from './StoreScreen'




export default class StoreSearchResult extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TopSearchBox />
          <PayAndGo />
          <ChangeCategory />
          <Tags />
          <NearYou />
          <ProductGrid />
          <Heading />
          <StoreScreen />          
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
