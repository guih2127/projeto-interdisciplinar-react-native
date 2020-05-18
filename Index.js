import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/Login'
import Sobre from './pages/Sobre'
import Home from './pages/Home'

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: Home },
    Sobre: { screen: Sobre },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#015A1D',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const SobreStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Sobre: { screen: Sobre },
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#015A1D',
      },
      headerTintColor: '#FFFFFF',
      title: 'Sobre',
      //Header title
    },
  }
);
const BottomTab = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Sobre: { screen: SobreStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Sobre') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#015A1D',
      inactiveTintColor: 'gray',
    },
  }
);


export default createAppContainer(BottomTab);