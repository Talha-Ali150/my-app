import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function Signup({ navigation }) {
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
                    <TextInput style={styles.inputTextStyling} placeholder='Full Name' />
                    <AntDesign name="user" size={24} color="black" />
                </View>
                <View style={styles.inputStyling}>
                    <TextInput style={styles.inputTextStyling} placeholder='Contact' />
                    <AntDesign name="contacts" size={24} color="black" />
                </View>
                <View style={styles.inputStyling}>
                    <TextInput style={styles.inputTextStyling} placeholder='Email' />
                    <Entypo name="email" size={24} color="black" />
                </View>
                <View style={styles.inputStyling}>
                    <TextInput style={styles.inputTextStyling} placeholder='Password' />
                    <AntDesign name="lock1" size={24} color="black" />
                </View>

            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('login')}>
            <Text style={styles.loginTextStyling}>
                Already have an account ? Login
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
    loginTextStyling:{
        color: '#024f9d',
        fontSize: 18
    }

})

export default Signup