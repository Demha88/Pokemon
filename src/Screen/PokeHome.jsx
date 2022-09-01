import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";


export default function PokeHome({navigation}){

    const [input, setInput] = useState("")
    

    const handlePress = () => {
        navigation.navigate("PokeDetail", {
            num: input
        })
    }


return(
    
    <View style={styles.container}>
    <Text style={styles.title}>Search Pokemon</Text>
    <View style={styles.formContainer}>
      <TextInput style={styles.input} value={input} onChangeText={t => setInput(t)} placeholder="Enter number" keyboardType="numeric"></TextInput>
      <Button title='Search' onPress={handlePress}></Button>
    </View>
    <Image source={require('./pokeImg.png')} 
    style={{width: 400, height: 600}}
    />
    </View>


)


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    formContainer: {
      flexDirection: "row"
    },
    title: {
      fontSize: 30,
      marginBottom: 10
    },
    input: {
      width: 200,
      borderStyle: "solid",
      borderWidth: 1,
      marginRight: 5,
      backgroundColor: "beige",
      
    }
  });