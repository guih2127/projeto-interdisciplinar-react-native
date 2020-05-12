import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Text,
    Animated
} from 'react-native';

export default class Sobre extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.background}>
                <View style={styles.textView}> 
                    <Text style={styles.text}>
                        QUER SABER MAIS SOBRE A CASA DE MUSICOTERAPIA?
                    </Text>
                </View>
                <View style={styles.containerLogo}>
                    <Animated.Image style={styles.image} source={require("../assets/logo.jpg")} />
                </View>
                <View style={styles.textView}> 
                    <Text style={styles.text}>
                        ACESSE NOSSO SITE:
                    </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.site}>
                        www.casadamusicoterapia.com.br
                    </Text>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },

    image: {
        width: 300,
        height: 300,
        margin: 100
    },

    textView: {
        paddingRight: 30,
        paddingLeft: 30
    },

    text: {
        color: "#015A1D",
        fontSize: 23,
        textAlign: "center"
    },

    site: {
        color: "#015A1D",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    }

});