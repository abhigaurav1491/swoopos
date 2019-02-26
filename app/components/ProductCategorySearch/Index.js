import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Header from '../Header/Header';
import TopSearchBox from './TopSearchBox'
import PayAndGo from './PayAndGo'
import NearYou from './NearYou'
import ProductGrid from './ProductGrid'
import ChangeCategory from './ChangeCategory'
import Tags from './Tags'




export default class ProductCategorySearch extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <TopSearchBox />
          <PayAndGo />
          <ChangeCategory />
          <Tags />
          <NearYou />
          <ProductGrid /> 
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
