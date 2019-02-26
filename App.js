import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Main from './app/Main';

import {Provider} from 'react-redux';
import {store} from './app/store/Index';

export default class App extends React.Component {
  state={
    showLoader: true,
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({
        showLoader: false
      })
    },1000);
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
        {
          this.state.showLoader ? 
          <ActivityIndicator color='#da466b' size='large' style={styles.loaderStyle} /> :
          <Main />
        }
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderStyle:{
    flex: 1,
    alignItems: 'center',
  }
});
