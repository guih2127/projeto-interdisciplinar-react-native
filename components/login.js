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

export default class Login extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.background}>
                <View style={styles.containerLogo}>
                    <Animated.Image style={styles.image} source={require("../assets/logo.jpg")} />
                </View>
                <Animated.View style={[styles.container, { opacity: 5, transform: [{ translateY: 5 }] }]}>
                    <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#015A1D" autoCorrect={false} onChangeText={() => { }} />
                    <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#015A1D" autoCorrect={false} onChangeText={() => { }} />

                    <TouchableOpacity style={styles.btnSubmit}>
                        <Text style={styles.submitText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnRegister}>
                        <Text style={styles.submitText}>Criar conta gratuita</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        marginTop: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF"
    },

    image: {
        flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },

    containerLogo: {
        flex: 1,
        justifyContent: "center",
    },

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "90%"
    },

    input: {
        borderStyle: "solid",
        borderColor: "#015A1D",
        borderWidth: 2,
        width: "90%",
        marginBottom: 15,
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },

    btnSubmit: {
        backgroundColor: "#015A1D",
        width: "90%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7
    },

    btnRegister: {
        marginTop: 10,
    },

    registerText: {
        color: "#FFF"
    },

    submitText: {
        color: "#FFF",
        fontSize: 18
    },

});