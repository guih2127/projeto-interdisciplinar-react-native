import React, { useState, useEffect, Component } from 'react';
import { 
  StyleSheet, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Animated,
  Keyboard 
} from 'react-native';

import Header from './components/Header';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 250, y: 250}));

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 250,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 250,
        duration: 100
      }),
    ]).start();
  }

    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Animated.Image style={{width: logo.x, height: logo.y}} source={require("./assets/logo.png")} />
        </View>
        <Animated.View style={[styles.container, { opacity: opacity, transform: [ {translateY: offset.y } ]}]}>
          <TextInput style={styles.input} placeholder="Email" autoCorrect={false} onChangeText={() => {}} />
          <TextInput style={styles.input} placeholder="Senha" autoCorrect={false} onChangeText={() => {}} />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.submitText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    );
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
  },

});