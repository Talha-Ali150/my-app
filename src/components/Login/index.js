import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>
                SAYLANI WELFARE
            </Text>
            <Text style={styles.subHeadingText}>
                ONLINE DISCOUNT STORE
            </Text>
            <View style={styles.inputContainer}>
                <View style={styles.inputStyling}>
                    <TextInput style={styles.inputTextStyling} placeholder='Email' onChangeText={email => setEmail(email)} />
                    <Entypo name="email" size={24} color="black" />
                </View>
                <View style={styles.inputStyling}>
                    <TextInput style={styles.inputTextStyling} placeholder='Password' onChangeText={password => setPassword(password)} />
                    <AntDesign name="lock1" size={24} color="black" />
                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('categories')}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                <Text style={styles.loginTextStyling}>
                    Don't have an account ? Register
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    headingText: {
        color: '#61b846',
        marginTop: '20%',
        fontSize: 50,
    },
    subHeadingText: {
        color: '#024f9d',
        fontSize: 30,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20%'
    },
    inputStyling: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: '10%',
        alignItems: 'center'
    },
    inputTextStyling: {
        fontSize: 30
    },
    button: {
        backgroundColor: '#61b846',
        fontSize: 30,
        marginTop: '30%',
        width: '50%'
    },
    buttonText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '20%',
        padding: '5%'
    },
    loginTextStyling: {
        color: '#024f9d',
        fontSize: 18
    }

})

export default Login