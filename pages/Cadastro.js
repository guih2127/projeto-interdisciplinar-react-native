import React from 'react'
import { StyleSheet, SafeAreaView, View, Image, Text, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import ErrorMessage from '../components/errorMessage'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { showMessage } from "react-native-flash-message"
import FlashMessage from "react-native-flash-message";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Informe um email válido')
    .required('Por favor informe um email válido'),
  password: Yup.string()
    .label('Password')
    .required('Por favor, informe uma senha válida')
    .min(4, 'A senha deve possuir ao menos 4 caracteres'),
  confirmPassword: Yup.string()
  .label('ConfirmPassword')
  .required('Por favor, informe uma senha válida')
  .min(4, 'A senha deve possuir ao menos 4 caracteres')
})

export default class Cadastro extends React.Component {

  constructor(props) {
    super(props);
  }

  /*   handleSubmit = (values, actions) => {
      if (values.email.length > 0 && values.password.length > 0 && values.confirmPassword.length > 0) {
        setTimeout(() => {
          this.props.navigation.navigate('Home')
        }, 200)
  
        actions.setSubmitting(false)
      }
    } */

  async handleSubmit(values, actions) {
    var axios = require('axios');
    let cadastroCompleto = false;

    await axios.post('https://ba77a03a0d72.ngrok.io/api/v1/nova-conta', {

      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword

      }).then(function (response) {

        actions.setSubmitting(false);

        showMessage({
          message: "Cadastro feito com sucesso!",
          type: "success",
        });

        cadastroCompleto = true;

      }).catch(function (error) {

        actions.setSubmitting(false);

        showMessage({
          message: "Ocorreu um erro ao fazer o cadastro!",
          type: "danger",
        });

        return;

      });

      if (cadastroCompleto) {
        await axios.post('https://ba77a03a0d72.ngrok.io/api/v1/entrar', {

          email: values.email,
          password: values.password,
    
          }).then(function (response) {
            var token = response.data.data.accessToken

            AsyncStorage.setItem(
              'TOKEN',
              token
            );

          }).catch(function (error) {
            console.log(error);
        });

      this.props.navigation.navigate('Home', {
        cadastrado: true,
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/*         <View>
          <Image style={styles.image} source={require("../assets/logo.jpg")} />
        </View> */}
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          onSubmit={(values, actions) => { this.handleSubmit(values, actions) }}
          validationSchema={validationSchema}
        >
          {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
            <React.Fragment>
              <FormInput
                name='email'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder='Email'
                autoCapitalize='none'
                iconName='ios-mail'
                iconColor='#015A1D'
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <FormInput
                name='password'
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder='Senha'
                secureTextEntry
                iconName='ios-lock'
                iconColor='#015A1D'
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <FormInput
                name='confirmPassword'
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                placeholder='Confirmar Senha'
                secureTextEntry
                iconName='ios-lock'
                iconColor='#015A1D'
              />
              <ErrorMessage errorValue={touched.confirmPassword && errors.confirmPassword} />
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
          )
          }
        </Formik>
        <FlashMessage position="top" style={{marginTop: -30}} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  buttonContainer: {
    margin: 25
  },
  image: {
    width: null,
    resizeMode: 'contain',
    height: 220
  },
})