import React, { Component } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Header from './components/Header';

class App extends Component {
  render() {
    const title = 'Projeto Interdisciplinar';
    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image style={styles.image} source={require("./assets/logo.png")} />
        </View>
        <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={() => {}} />
          <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() => {}} />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.submitText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919"
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
    backgroundColor: "#FFF",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },

  btnSubmit: {
    backgroundColor: "#35AAFF",
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
  }
});

export default App;