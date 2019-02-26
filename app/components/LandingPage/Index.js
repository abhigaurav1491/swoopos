import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Header from '../Header/Header';
import BottomHeader from './BottomHeader'
import PayAndGo from './PayAndGo'
import CategoriesButtons from './CategoriesButtons'
import BannerBox from './BannerBox'
import NearYou from './NearYou'
import ProductGrid from './ProductGrid'
import TopVenues from './TopVenues'
import Content from './Content'
import SearchBox from './SearchBox'
import StoreScreen from './StoreScreen'




export default class LandingPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <BottomHeader />
          <PayAndGo />
          <BannerBox />
          <CategoriesButtons />
          <NearYou />
          <ProductGrid />
          <TopVenues />
          <StoreScreen />
          <Content />
          <SearchBox />   
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
