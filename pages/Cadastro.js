import React from 'react';
import { SafeAreaView, StyleSheet, Button, TextInput, View, Text, Image} from 'react-native';
import { Formik, Form } from 'formik'
import { FormButton } from '../components/FormButton';
import { FormInput } from '../components/FormInput';
import * as Yup from 'yup'


const CadastroSchema = Yup.object({
    nome: Yup.string()
             .required('Esse campo é obrigatório'),
    email: Yup.string()
              .email('Informe um email válido')
              .required('Esse campo é obrigatório'),
    dtNascimento: Yup.string()
                     .required('Esse campo é obrigatório')   
})

export default function Cadastro() {

    return (


    <View style = { styles.container } >

        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../assets/avatar_vazio.png")} />
        </View>
            <Formik
                initialValues={{ email: '', nome: '', dtNascimento: '' }}
                validationSchema={CadastroSchema}
                onSubmit={(values, actions) => { 
                        console.log(values)
                        actions.resetForm()
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
       padding: 10,
       color: "#015A1D"
        
    },
    buttonContainer: {
        marginTop: 60,
        borderWidth: 1,
        borderColor: "#015A1D",
        borderRadius: 20,
    },
    imageContainer: {
        borderRadius: 30,
        marginBottom: 30
    },
    image: {
        width: null,
        
        resizeMode: 'contain',
        height: 220
    }
    

})