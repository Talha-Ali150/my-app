import { View, Image, Text, StyleSheet } from "react-native"
export default function CategoryPics(props) {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image source={props.source} />
        <Text>{props.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imgContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    margin: 30
  }
})