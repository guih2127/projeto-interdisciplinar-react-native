import React from 'react';
import { SafeAreaView, StyleSheet, Button, TextInput, View, Text, Image } from 'react-native';
import { Formik, Form } from 'formik'
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';
import * as Yup from 'yup'

export default function Cadastro() {

    return (


    <View style = { styles.container } >

        <Formik
            initialValues={{ email: '', nome: '', dtNascimento: '' }}
            onSubmit={(values) => { 
                    console.log(values)
             }}> 
             {(props) => (
                 <View>
                        <TextInput
                            style={styles.input}
                            name='nome'
                            value={props.values.nome}
                            placeholder='Nome'
                            onChangeText={props.handleChange('nome')}
                        />

                        <TextInput
                            style={styles.input}
                            name='email'
                            value={props.values.email}
                            placeholder='E-mail'
                            onChangeText={props.handleChange('email')}
                        />

                        <TextInput
                            style={styles.input}
                            name='dtNascimento'
                            value={props.values.dtNascimento}
                            placeholder='Data Nascimento'
                            onChangeText={props.handleChange('dtNascimento')}
                        />

                            <View style={styles.buttonContainer}>
                                <Button style={styles.botao}
                                    onPress={props.handleSubmit}
                                    title='Salvar'
                                    buttonColor='#015A1D'
                                />
                            </View>
                 </View>
             )}
          
          
              
        </Formik>
    </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingVertical: 50,
        paddingHorizontal: 20
    },
    input: {
            borderWidth: 1,
            borderColor: '#DDD',
            padding: 10,
            fontSize: 18,
            borderRadius: 6,
            margin: 10
    },
    botao: {
        borderColor: "#015A1D",
        borderRadius: 20,
        
    },
    buttonContainer: {
        margin: 25
    }
    

})