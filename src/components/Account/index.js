import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Login from '../Login';

function Account({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>this is account container</Text>
            
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
})

export default Account