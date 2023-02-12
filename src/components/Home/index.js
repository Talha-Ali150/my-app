import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.mainImg}  source={require('../../images/cart.png')} />
      <Text style={styles.headingText}>
        SAYLANI WELFARE
      </Text>
      <Text style={styles.subHeadingText}>
        ONLINE DISCOUNT STORE
      </Text>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('signup')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
mainImg:{
  backgroundColor:'white',
  marginTop: '20%',
  marginRight: '10%'
},
headingText:{
color: '#61b846',
marginTop: '20%',
fontSize: 50,
},
subHeadingText:{
  color: '#024f9d',
  fontSize: 30,
},
button:{
  backgroundColor: '#61b846',
  fontSize: 30,
  marginTop: '30%',
  width: '50%'
},
buttonText:{
  fontSize: 30,
  color: 'white',
  fontWeight: 'bold',
  marginLeft: '20%',
  padding: '5%'
}
})

export default Home