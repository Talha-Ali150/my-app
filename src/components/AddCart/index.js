
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

function AddCart(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cartItemContainer}>
        <View style={styles.cartItemContainer1}>
          <Image source={props.source} />
        </View>
        <View style={styles.cartItemContainer2}>
          <Text style={styles.header}>{props.heading}</Text>
          <Text style={styles.para}>{props.description}</Text>
        </View>
        <View style={styles.cartItemContainer3}>
          <Text style={styles.pricing}>Rs {props.price} per {props.unit}</Text>
          <AntDesign name="pluscircle" size={24} color="black" />
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    cartItemContainer:{
     display: 'flex',
     flexDirection: 'row' ,
     justifyContent: 'space-between',
     alignItems: 'center',
     marginTop: '10%'

    },
    cartItemContainer1:{
    },
    cartItemContainer2:{
      flexDirection: 'column'
    },
    cartItemContainer3:{},
    header:{
      fontSize: 18
    },
    para:{
      fontSize: 15
    },
    pricing:{
      fontSize: 12,
      fontWeight: 'bold'
    }
  })

  export default AddCart