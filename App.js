import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Agenda from './pages/Agenda';


const HomeStack = createStackNavigator(
    {
        //Defination of Navigaton from home screen
        Home: { screen: Home },
        Sobre: { screen: Sobre },
        Login: { screen: Login },
        Cadastro: { screen: Cadastro},
        Agenda: { screen: Agenda},
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
        Login: { screen: Login },
        Cadastro: { screen: Cadastro},
        Agenda: { screen: Agenda},
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
const LoginStack = createStackNavigator(
    {
        //Defination of Navigaton from setting screen
        Agenda: { screen: Agenda},
        Home: { screen: Home },
        Login: { screen: Login },
        Sobre: { screen: Sobre },
        Cadastro: { screen: Cadastro},
        
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#015A1D',
            },
            headerTintColor: '#FFFFFF',
            title: 'Login',
            //Header title
        },
    }
);

const AgendaStack = createStackNavigator(
    {
        //Defination of Navigaton from setting screen
        Login: { screen: Login },
        Sobre: { screen: Sobre },
        Home: { screen: Home },
        Cadastro: { screen: Cadastro},
        Agenda: { screen: Agenda},
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#015A1D',
            },
            headerTintColor: '#FFFFFF',
            title: 'Agenda',
            //Header title
        },
    }
);

const BottomTab = createBottomTabNavigator(
    {
        Login: { screen: LoginStack },
        Home: { screen: HomeStack },
        Sobre: { screen: SobreStack },
        Agenda: { screen: AgendaStack}
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'ios-home';
                } else if (routeName === 'Sobre') {
                    iconName = 'ios-more';
                } else if (routeName === 'Login') {
                    iconName = 'ios-log-in';
                } else if (routeName === 'Agenda') {
                    iconName = 'ios-calendar';
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

