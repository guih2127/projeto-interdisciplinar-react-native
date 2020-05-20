import React, { Component } from 'react';
import { View, Button, Platform, StyleSheet, Text, SafeAreaView, Picker, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import { FormButton } from '../components/FormButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/errorMessage';


const validationSchema = Yup.object().shape({
  profissional: Yup.string()
    .label('Profissional')
    .required('Por favor selecione o profissional'),
  atividade: Yup.string()
    .label('Atividade')
    .required('Por favor selecione a atividade'),
  dt: Yup.string()
    .label('Data Agenmdamento')
    .required('Por favor informe a data'),
})

const DatePickerField = ({ name, value, onChange }) => {
  return (
      <DatePicker
          selected={(value && new Date(value)) || null}
          onChange={val => {
              onChange(name, val);
          }}
          iconComponent={
            <Icon 
            size={30}
            color='#333333' 
            name='access-time' 
            /> 
         }
      />
  );
};


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
      screenHeight: 0,
      dt: '',
      hr: ''
    }
  }

  handleSubmit = (values, actions) => {
    if (values.profissional.length > 0 && values.atividade.length > 0 && values.dt.length > 0 ) {
      setTimeout(() => {
        this.props.navigation.navigate('Home')
      }, 200)

      actions.setSubmitting(false)
    }
  }

  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };

  render() {

    const { height } = Dimensions.get('window');
    const scrollEnabled = this.state.screenHeight > height;

    let profissionaisItem = this.state.profissionais.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />

    })

    let atividadesItem = this.state.atividades.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />

    })

    return (

      <SafeAreaView style={styles.container}>
                <View>
                    <Image style={styles.image} source={require("../assets/calendar.png")} />
                  </View>

              <Formik
                initialValues={{
                  profissional: '', atividade: '', dt: new Date()
                }}
                onSubmit={(values, actions) => { this.handleSubmit(values, actions) }}
                validationSchema={validationSchema}
              >
                {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
                  <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={styles.scrollview}
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={this.onContentSizeChange}
                  >
                    <React.Fragment>

                    <View style={styles.containerData}>
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
                      <ErrorMessage errorValue={touched.atividade && errors.atividade} />


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
                    <ErrorMessage errorValue={touched.profissional && errors.profissional} />            
                    

                    <DatePickerField
                    name="dt"
                    value={values.dt}
                    onChange={(itemValue, itemIndex) => {
                      this.setState({ dt: itemValue })
                    }}
                />

              
                      <View style={styles.buttonContainer}>
                        <FormButton
                          buttonType='outline'
                          onPress={handleSubmit}
                          title='Cadastrar'
                          buttonColor='#015A1D'
                          disabled={!isValid || isSubmitting}
                          loading={isSubmitting}
                        />
                      </View>
                    </React.Fragment>
                  </ScrollView>
                )
                }
              </Formik>
    </SafeAreaView>


     
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
    paddingLeft: 20,
    fontSize: 18,
    color: '#015A1D'
  },
  buttonContainer: {
    width: 250,
    marginLeft: 90,
    borderWidth: 1,
    padding: 10,
    borderColor: '#015A1D',
    borderRadius: 20,
  },
  buttonText: {
    color: '#015A1D',
    textAlign: 'center',
  },
  containerAtividade: {
    marginLeft: 20
  },
  campoDtHr: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    margin: 10
  }


})