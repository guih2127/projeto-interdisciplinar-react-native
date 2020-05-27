import React from 'react'
import { StyleSheet, SafeAreaView, View, Image, Text, AsyncStorage } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import ErrorMessage from '../components/errorMessage'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .label('Email')
        .email('Informe um email válido')
        .required('Por favor informe um email válido'),
    password: Yup.string()
        .label('Password')
        .required('Por favor, informe uma senha válida')
        .min(4, 'A senha deve possuir ao menos 4 caracteres')
})

export default class Login extends React.Component {
 
    async handleSubmit(values, actions) {
        var axios = require('axios');

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

        actions.setSubmitting(false);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Image style={styles.image} source={require("../assets/logo.jpg")} />
                </View>
                <Formik
                    initialValues={{ email: '', password: '' }}
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
                                placeholder='Password'
                                secureTextEntry
                                iconName='ios-lock'
                                iconColor='#015A1D'
                            />
                            <ErrorMessage errorValue={touched.password && errors.password} />
                            <View style={styles.buttonContainer}>
                                <FormButton
                                    buttonType='outline'
                                    onPress={handleSubmit}
                                    title='Login'
                                    buttonColor='#015A1D'
                                    disabled={!isValid || isSubmitting}
                                    loading={isSubmitting}
                                />
                            </View>
                        </React.Fragment>
                    )
                    }
                </Formik>
                <Button
                    title="Cadastro"
                    onPress={() => this.props.navigation.navigate('Cadastro')}
                    titleStyle={{
                        color: '#015A1D'
                    }}
                    type="clear"
                />
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