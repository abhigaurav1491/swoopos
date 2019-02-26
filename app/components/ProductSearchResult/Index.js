import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import Header from '../Header/Header';
import TopSearchBox from './TopSearchBox'
import PayAndGo from './PayAndGo'
import ProductGrid from './ProductGrid'
import Heading from './Heading'
import Tags from './Tags'




export default class ProductSearchResult extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <TopSearchBox />
          <PayAndGo />
          <Tags />
          <Heading />
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
