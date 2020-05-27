import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { showMessage } from "react-native-flash-message"
import FlashMessage from "react-native-flash-message";

const posts = [
  {
      id: '1',
      data: '16/05/2019',
      descricao: 'As mulheres estão em peso, desde o princípio, construindo a história da Musicoterapia.',
      imagem: require('../assets/post_images/1.png')
  },
  {
      id: '2',
      data: '16/05/2019',
      descricao: 'Antes de uma criança começar a falar, ela canta. Antes de escrever, ela desenha. No momento que consegue ficar de pé, ela dança.',
      imagem: require('../assets/post_images/2.png')
  },
  {
      id: '3',
      data: '16/05/2019',
      descricao: 'ESTAMOS DE VOLTA!!! Nossas sessões de Grupo começam nessa semana!',
      imagem: require('../assets/post_images/3.png')
  },
]

const renderItem = ({item}) => (
    <View style={styles.item}>
        <Image style={styles.imagem} source={item.imagem} />
        <Text style={styles.data}>
            {item.data}
        </Text>
        <Text style={styles.itemText}>
            {item.descricao}
        </Text>
    </View>
)

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let cadastrado = this.props.navigation.getParam("cadastrado", false);

    if (cadastrado) {
      console.log('entrou');
      Alert.alert(
        'Sucesso!',
        'Cadastro feito com sucesso.',
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: true }  
      );
/*       showMessage({
        message: "Cadastro feito com sucesso!",
        type: "success",
      }); */
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: "white"}}>
        <FlatList
          data={posts}
          renderItem={renderItem}
        />
        <FlashMessage position="top" style={{marginTop: -30}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 20,
   backgroundColor: "white"
  },

  item: {
    padding: 20,
  },

  itemText: {
      marginTop: 10,
      fontSize: 15
  },

  data: {
      fontWeight: "bold",
      marginTop: 10
  },

  imagem: {
    width: 350,
    height: 350,
    borderColor: "#015A1D",
    borderWidth: 0.5,
  }
})