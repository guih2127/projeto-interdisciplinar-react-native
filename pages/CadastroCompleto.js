import React from 'react'
import { StyleSheet, SafeAreaView, View, Image, Text, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import ErrorMessage from '../components/errorMessage'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { ScrollView } from 'react-native-gesture-handler'

const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .label('Nome')
    .required('Por favor informe seu nome'),
  email: Yup.string()
    .label('Email')
    .email('Informe um email válido')
    .required('Por favor informe um email válido'),
  cpf: Yup.string()
    .label('CPF')
    .required('Por favor informe seu CPF'),
  dtNascimento: Yup.string()
    .label('Data de Nascimento')
    .required('Por favor informe sua data de nascimento'),
  telefone: Yup.string()
    .label('Telefone')
    .required('Por favor informe seu telefone'),
  logradouro: Yup.string()
    .label('Logradouro')
    .required('Por favor informe seu logradouro'),
  numero: Yup.string()
    .label('Número')
    .required('Por favor informe seu número'),
  complemento: Yup.string()
    .label('Complemento'),
  bairro: Yup.string()
    .label('Bairro')
    .required('Por favor informe seu bairro'),
  cep: Yup.string()
    .label('CEP')
    .required('Por favor informe seu CEP'),
  cidade: Yup.string()
    .label('Cidade')
    .required('Por favor informe sua cidade'),
  uf: Yup.string()
    .label('UF')
    .required('Por favor informe sua UF'),
  password: Yup.string()
    .label('Password')
    .required('Por favor, informe uma senha válida')
    .min(4, 'A senha deve possuir ao menos 4 caracteres'),

})

export default class CadastroCompleto extends React.Component {
  state = {
    // We don't know the size of the content initially, and the probably won't instantly try to scroll, so set the initial content height to 0
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  // goToSignup = () => this.props.navigation.navigate('Signup') navegar para cadastro

  handleSubmit = (values, actions) => {
    if (values.email.length > 0 && values.password.length > 0 && values.nome.length > 0 && values.cpf.length > 0
      && values.dtNascimento.length > 0 && values.telefone.length > 0 && values.logradouro.length > 0 && values.numero.length > 0
      && values.complemento.length > 0 && values.bairro.length > 0 && values.cep.length > 0 && values.cidade.length > 0
      && values.uf.length > 0) {
      setTimeout(() => {
        this.props.navigation.navigate('Home')
      }, 200)

      actions.setSubmitting(false)
    }
  }

  render() {
    const { height } = Dimensions.get('window');
    const scrollEnabled = this.state.screenHeight > height;

    return (
      <SafeAreaView style={styles.container}>
        {/*         <View>
          <Image style={styles.image} source={require("../assets/logo.jpg")} />
        </View> */}
        <Formik
          initialValues={{
            email: '', password: '', cpf: '', telefone: '', dtNascimento: '',
            logradouro: '', numero: '', complemeno: '', cep: '', bairro: '', cidade: '', uf: ''
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
                <FormInput
                  name='nome'
                  value={values.nome}
                  onChangeText={handleChange('nome')}
                  onBlur={handleBlur('nome')}
                  placeholder='Nome'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.nome && errors.nome} />
                <FormInput
                  name='email'
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder='Email'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.email && errors.email} />
                <FormInput
                  name='CPF'
                  value={values.cpf}
                  onChangeText={handleChange('CPF')}
                  onBlur={handleBlur('CPF')}
                  placeholder='000.000.000-00'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.cpf && errors.cpf} />
                <FormInput
                  name='dtNascimento'
                  value={values.dtNascimento}
                  onChangeText={handleChange('dtNascimento')}
                  onBlur={handleBlur('dtNascimento')}
                  placeholder='Data de Nascimento (dd/mm/yyy)'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.dtNascimento && errors.dtNascimento} />
                <FormInput
                  name='telefone'
                  value={values.telefone}
                  onChangeText={handleChange('telefone')}
                  onBlur={handleBlur('telefone')}
                  placeholder='(XX) - XXXXX-XXXX'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.telefone && errors.telefone} />
                <FormInput
                  name='logradouro'
                  value={values.logradouro}
                  onChangeText={handleChange('logradouro')}
                  onBlur={handleBlur('logradouro')}
                  placeholder='Logradouro'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.logradouro && errors.logradouro} />
                <FormInput
                  name='numero'
                  value={values.numero}
                  onChangeText={handleChange('numero')}
                  onBlur={handleBlur('numero')}
                  placeholder='Nº'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.numero && errors.numero} />
                <FormInput
                  name='complemento'
                  value={values.complemento}
                  onChangeText={handleChange('complemento')}
                  onBlur={handleBlur('complemento')}
                  placeholder='Comp.'
                  autoCapitalize='none'
                />
                <FormInput
                  name='bairro'
                  value={values.bairro}
                  onChangeText={handleChange('bairro')}
                  onBlur={handleBlur('bairro')}
                  placeholder='Bairro'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.bairro && errors.bairro} />
                <FormInput
                  name='CEP'
                  value={values.cep}
                  onChangeText={handleChange('CEP')}
                  onBlur={handleBlur('CEP')}
                  placeholder='CEP'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.cep && errors.cep} />
                <FormInput
                  name='cidade'
                  value={values.cidade}
                  onChangeText={handleChange('cidade')}
                  onBlur={handleBlur('cidade')}
                  placeholder='Cidade'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.cidade && errors.cidade} />
                <FormInput
                  name='UF'
                  value={values.uf}
                  onChangeText={handleChange('UF')}
                  onBlur={handleBlur('UF')}
                  placeholder='UF'
                  autoCapitalize='none'
                />
                <ErrorMessage errorValue={touched.uf && errors.uf} />

                <FormInput
                  name='password'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder='Senha'
                  secureTextEntry
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
    backgroundColor: "#FFFFFF",
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  buttonContainer: {
    margin: 25
  }
})