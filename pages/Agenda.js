import React, { Component } from 'react';
import { View, Button, Platform, StyleSheet, Text, Picker, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/errorMessage';
import { TextInputMask } from 'react-native-masked-text'

export default class Agenda extends Component {


  constructor(props) {
    super(props);

    this.state = {
      profissional: 0,
      profissionais: [
        { key: 1, nome: 'Selecione o Profissional' },
        { key: 2, nome: 'Juliana' },
        { key: 3, nome: 'Fernando' },
        { key: 4, nome: 'Túlio' },
      ],
      atividade: 0,
      atividades: [
        { key: 6, nome: 'Selecione a Atividade' },
        { key: 6, nome: 'Musicoterapia Para idosos' },
        { key: 7, nome: 'Musicoterapia Para Crianças' },
        { key: 8, nome: 'Conhecer o espaço' }

      ],
      dtHr: '',
      datasDisponiveis: [
        {key: 9, nome: '25/05/2020 às 09h00'},
        {key: 9, nome: '25/05/2020 às 17h00'},
        {key: 9, nome: '26/05/2020 às 09h00'},
        {key: 9, nome: '26/05/2020 às 17h00'},
        {key: 9, nome: '27/05/2020 às 09h00'},
        {key: 9, nome: '27/05/2020 às 17h00'},
        {key: 9, nome: '28/05/2020 às 09h00'},
        {key: 9, nome: '28/05/2020 às 17h00'},
      ]
    }
  }

  render() {

    let profissionaisItem = this.state.profissionais.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />

    })

    let atividadesItem = this.state.atividades.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />

    })

    let dtHrItem = this.state.datasDisponiveis.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />

    })


    return (

      <View style={styles.container}>

      <ScrollView>
        
        <View>
          <Image style={styles.image} source={require("../assets/calendar.png")} />
        </View>

        
          <React.Fragment>

          <View>
                <Text style={styles.textoContainer}>
                    Selecione a data do agendamento:
                </Text>

                <Picker
                selectedValue={this.state.dtHr}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ dtHr: itemValue })
                }}>
                {dtHrItem}
              </Picker>
            </View>
                

            
            <View style={styles.containerAtividade}>
              <Text style={styles.textoContainer}>
                Selecione a atividade:
                        </Text>

              <Picker
                selectedValue={this.state.atividade}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ atividade: itemValue })
                }}>
                {atividadesItem}
              </Picker>
            </View>


            <View tyle={styles.containerProfissional}>
              <Text style={styles.textoContainer}>
                Selecione o profissional:
                          </Text>

              <Picker
                selectedValue={this.state.profissional}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({ profissional: itemValue })
                }}>
                {profissionaisItem}
              </Picker>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity >
                <Text style={styles.buttonText}> Salvar</Text>
              </TouchableOpacity>
            </View>

                  <Text>
                    
                  </Text>

          </React.Fragment>
        </ScrollView>
      </View>



    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white"
  },
  image: {
    width: null,
    resizeMode: 'contain',
    height: 120
  },
  textoContainer: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
    color: '#015A1D'
  },
  buttonContainer: {
    width: 250,
    marginLeft: 90,
    marginTop: 20,
    marginBottom: 50,
    borderWidth: 1,
    padding: 10,
    borderColor: '#015A1D',
    borderRadius: 20,
  },
  buttonText: {
    color: '#015A1D',
    textAlign: 'center',
  }


})