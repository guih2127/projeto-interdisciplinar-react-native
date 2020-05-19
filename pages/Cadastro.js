import React from 'react';
import { SafeAreaView, StyleSheet, Button, TextInput, View, Text, Image} from 'react-native';
import { Formik, Form } from 'formik'
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .label('Nome')
    .required('Por favor informe seu nome'),
  email: Yup.string()
    .label('Email')
    .email('Informe um email válido')
    .required('Por favor informe um email válido'),
  password: Yup.string()
    .label('Password')
    .required('Por favor, informe uma senha válida')
    .min(4, 'A senha deve possuir ao menos 4 caracteres'),
  confirmpassword: Yup.string()
    .label('Password')
    .required('Por favor, informe uma senha válida')
    .min(4, 'A senha deve possuir ao menos 4 caracteres')
})

export default class Cadastro extends React.Component {
  // goToSignup = () => this.props.navigation.navigate('Signup') navegar para cadastro

  handleSubmit = (values, actions) => {
    if (values.email.length > 0 && values.password.length > 0 && values.nome.length > 0) {
      setTimeout(() => {
        this.props.navigation.navigate('Cadastro')
      }, 200)

      actions.setSubmitting(false)
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
{/*         <View>
          <Image style={styles.image} source={require("../assets/logo.jpg")} />
        </View> */}
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => { this.handleSubmit(values, actions) }}
          validationSchema={validationSchema}
        >
          {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
            <React.Fragment>
              <FormInput
                name='nome'
                value={values.nome}
                onChangeText={handleChange('nome')}
                onBlur={handleBlur('nome')}
                placeholder='Nome'
                autoCapitalize='none'
                iconName='ios-mail'
                iconColor='#015A1D'
              />
              <ErrorMessage errorValue={touched.nome && errors.nome} />
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
              <ErrorMessage errorValue={touched.confirmpassword && errors.confirmpassword} />
              <FormInput
                name='confirmpassword'
                value={values.password}
                onChangeText={handleChange('confirmpassword')}
                onBlur={handleBlur('confirmpassword')}
                placeholder='Confirmar senha'
                secureTextEntry
                iconName='ios-lock'
                iconColor='#015A1D'
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
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
  }
})
