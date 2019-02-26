import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import LoginScreen from './components/login/LoginContent';
import RegisterScreen from './components/register/FormContent';
import Dashboard from './components/LandingPage/Index';
import NearbyDeals from './components/NearbyDeals/Index';
import LoyaltyVouchers from './components/LoyaltyVouchers/Index';
import ProductCategorySearch from './components/ProductCategorySearch/Index';
import ProductSearchResult from './components/ProductSearchResult/Index';
import StoresCategoryResult from './components/StoresCategoryResult/Index';
import StoreSearchResult from './components/StoreSearchResult/Index';
import VerifyOTP from './components/otpVerify/VerifyOTP';
import Splash from './components/Splash/Index';
import StampCard from './components/StampCard/Index';
import MenuDrawer from './menudrawer';

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerwidth : WIDTH * 0.83,
    contentComponent: ({navigation}) => {
        return (<MenuDrawer navigation={navigation} />)
    }
}

export const myDrawer = createDrawerNavigator(
{
   LandingPage: { 
    screen: Dashboard,
   },
   LoyaltyVouchers: { 
    screen: LoyaltyVouchers,
   },
   NearbyDeals: { 
    screen: NearbyDeals,
   },
   ProductCategorySearch: {
    screen: ProductCategorySearch,
   },
   ProductSearchResult: {
    screen: ProductSearchResult,
   },
   StampCard: {
    screen: StampCard,
   },
   StoresCategoryResult: {
    screen: StoresCategoryResult,
   },
   StoreSearchResult: {
    screen: StoreSearchResult,
   }
},
DrawerConfig);

const AppNavigator = createStackNavigator({
  Splash: { 
    screen: Splash,
    navigationOptions: {
      header: null
    }
   },
  LoginScreen: { 
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
   },
  RegisterScreen: { 
    screen: RegisterScreen,
    navigationOptions: {
      header: null
    }
   },
  VerifyOTP: { 
    screen: VerifyOTP,
    navigationOptions: {
      header: null
    }
   },
  Dashboard: { 
    screen: myDrawer,
    navigationOptions: {
      header: null
    }
   },
   NearbyDeals: { 
    screen: myDrawer,
    navigationOptions: {
      header: null
    }
   },
   LoyaltyVouchers: { 
    screen: myDrawer,
    navigationOptions: {
      header: null
    }
   },
   ProductCategorySearch: { 
    screen: myDrawer,
    navigationOptions: {
      header: null
    }
   },
   ProductSearchResult: { 
    screen: myDrawer,
    navigationOptions: {
      header: null
    }
   },
   StoresCategoryResult: { 
    screen: myDrawer,
    navigationOptions: {
      header: null
    }
   },
   StoreSearchResult: { 
    screen: myDrawer,
    navigationOptions: {
      header: null
    }
   },
   
});

class Main extends Component {

  render() {
    return (  
    	<View style={{flex: 1, backgroundColor: '#fff'}}>
	    	<AppNavigator />
	    </View>
    );
  }
}

export default createAppContainer(AppNavigator);