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
import CadastroCompleto from './pages/CadastroCompleto';
import Agenda from './pages/Agenda';

let login = true;

const HomeStack = createStackNavigator(
    {
        //Defination of Navigaton from home screen
        Home: { screen: Home },
        Sobre: { screen: Sobre },
        Login: { screen: Login },
        Cadastro: { screen: Cadastro },
        CadastroCompleto: { screen: CadastroCompleto },
        Agenda: { screen: Agenda }

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
        Cadastro: { screen: Cadastro },
        CadastroCompleto: { screen: CadastroCompleto },
        Agenda: { screen: Agenda },

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
        Login: { screen: Login },
        Sobre: { screen: Sobre },
        Home: { screen: Home },
        Cadastro: { screen: Cadastro },
        Agenda: { screen: Agenda }
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
const CadastroStack = createStackNavigator(
    {
        //Defination of Navigaton from setting screen
        Cadastro: { screen: Cadastro },
        Sobre: { screen: Sobre },
        Home: { screen: Home },
        Login: { screen: Login },
        Agenda: { screen: Agenda }
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#015A1D',
            },
            headerTintColor: '#FFFFFF',
            title: 'Cadastro',
            //Header title
        },
    }
);
const CadastroCompletoStack = createStackNavigator(
    {
        //Defination of Navigaton from setting screen
        EditarPerfil: { screen: CadastroCompleto },
        Sobre: { screen: Sobre },
        Home: { screen: Home },
        Login: { screen: Login },
        Agenda: { screen: Agenda }
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#015A1D',
            },
            headerTintColor: '#FFFFFF',
            title: 'Editar Perfil',
            //Header title
        },
    }
);

const AgendaStack = createStackNavigator(
    {
        //Defination of Navigaton from setting screen
        Agenda: { screen: Agenda },
        Home: { screen: Home },
        EditarPerfil: { screen: CadastroCompleto },
        Sobre: { screen: Sobre },
        Login: { screen: Login },
        
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

const BottomTabLogged = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Sobre: { screen: SobreStack },
        Perfil: { screen: CadastroCompletoStack},
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
                } else if (routeName === 'Perfil') {
                    iconName = 'ios-person'
                } else if (routeName === 'Agenda') {
                    iconName = 'ios-calendar'
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

const BottomTabNotLogged = createBottomTabNavigator(
    {
        Login: { screen: LoginStack },
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
                    iconName = 'ios-home';
                } else if (routeName === 'Sobre') {
                    iconName = 'ios-more';
                } else if (routeName === 'Login') {
                    iconName = 'ios-log-in';
                } else if (routeName === 'Agenda') {
                    iconName = 'ios-calendar'
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

const BottomTab = login ? BottomTabLogged : BottomTabNotLogged;

export default createAppContainer(BottomTab);