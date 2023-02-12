import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import CategoryPics from '../CategoryPics';
import AddCart from '../AddCart'

export default function Categories({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.header1}>
                    <Text style={styles.headingText}>
                        SAYLANI WELFARE
                    </Text>
                    <Text style={styles.subHeadingText}>
                        DISCOUNT STORE
                    </Text>
                </View>
                <View style={styles.header2}>
                    <AntDesign name="shoppingcart" size={24} color="black"  onPress={()=> navigation.navigate('cart')}/>
                </View>
            </View>
            <View>
            <Image style={styles.mainImg}  source={require('../../images/categoryImage.jpg')} />
            </View>
            <Text style={{fontSize: 22, marginTop: 10, marginLeft: 20}}>Shop By Category</Text>
            <ScrollView horizontal={true}>
                <CategoryPics title='vegetables' source={require('../../images/vegetables.jpg')} />
                <CategoryPics title='vegetables' source={require('../../images/vegetables.jpg')} />
                <CategoryPics title='vegetables' source={require('../../images/vegetables.jpg')} />
                <CategoryPics title='vegetables' source={require('../../images/vegetables.jpg')} />
                <CategoryPics title='vegetables' source={require('../../images/vegetables.jpg')} />
            </ScrollView>

            <AddCart source={require('../../images/vegetables.jpg')}
            heading='Vegetables'
            description='This is description'
            price='800'
            unit='kg'
         />
            <AddCart source={require('../../images/vegetables.jpg')}
            heading='Vegetables'
            description='This is description'
            price='800'
            unit='kg'
         />
            <AddCart source={require('../../images/vegetables.jpg')}
            heading='Vegetables'
            description='This is description'
            price='800'
            unit='kg'
         />
            <AddCart source={require('../../images/vegetables.jpg')}
            heading='Vegetables'
            description='This is description'
            price='800'
            unit='kg'
         />
            
        </ScrollView>
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
        fontSize: 20,
    },
    subHeadingText: {
        color: '#024f9d',
        fontSize: 10,
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '90%',
        marginTop: '10%'
    },
    header1: {
    },
    header2: {
    },
    imgStyling:{

    }
})