import { Text, View, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function PokeDetail({route}){
const {num} = route.params

// let url = "https://pokeapi.co/api/v2/pokemon/_num_"
// let url2 = "https://pokeapi.co/api/v2/pokemon-species/_num_"

const [pokemon, setPokemon] = useState(null)
const [species, setSpecies] = useState(null)


    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
   // const [data, setData] = useState(null)
    
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    // const [data, setData] = useState(null)
    
    // function fetchRec(){
    //     let url = "https://pokeapi.co/api/v2/pokemon/_num_"
    //     let url2 = "https://pokeapi.co/api/v2/pokemon-species/_num_"
    //     const req1 =  axios.get(url.replace("_num_", name))
    //     const req2= axios.get(url2.replace("_num_", name))
    //     axios.all([req1, req2])
    //         .then(
    //             axios.spread((...res) => setData({r1:res[0],r2:res[1]})))
    //         .catch((err) => setError(e.error))
    //         .finally(() => setLoading(false))
    // }

    const capitalizeFirstLetter = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
    
    //   const fetchData = () => {
    //   const url = "https://pokeapi.co/api/v2/pokemon/"+num
    //   const url2 = "https://pokeapi.co/api/v2/pokemon-species/"+num
      
    //   const req1 =  axios.get(url)
    //   const req2= axios.get(url2)
    //   axios.all([req1, req2])
    //           .then(
    //               axios.spread((...res) => {
    //                 const reqUrl1 = res[0].data.name
    //                 const reqUrl2 = res[1].data.color.name

    //                 setPokeName(reqUrl1)
    //                 setPokeColor(reqUrl2)
    //               }))
            
    //   }
    
    //   useEffect(() => {
    //     fetchData()

    //   }, [])
     useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/"+num
        const url2 = "https://pokeapi.co/api/v2/pokemon-species/"+num
        
        const req1 =  axios.get(url)
        const req2= axios.get(url2)
        axios.all([req1, req2])
                .then(
                    axios.spread((...res) => {
                      const reqUrl1 = res[0].data
                      const reqUrl2 = res[1].data
  
                      setPokemon(reqUrl1)
                      setSpecies(reqUrl2)
                    
                    }))
                .catch((err) => console.log(err))    

    //     const url = "https://pokeapi.co/api/v2/pokemon/_num_"
    //     const url2 = "https://pokeapi.co/api/v2/pokemon-species/_num_"

    //     const req1 =  axios.get(url.replace("_num_", num))
    //     const req2= axios.get(url2.replace("_num_", num))
    //     //fetch()
        
    //     setLoading(true)
    //     setError(null)
    //     setData(null)
       
    //     axios.get(url.replace("_num_", num))
    //         .then(({ data }) => {
    //             setData(data)
    //         })
    //         .catch(e => {
    //             setError(e.error)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
     }, [num])

    

     let i=0

return(
<View>
{
                    // loading ? (<Text> Loading...</Text>)
                    // : error ? (<Text> Error...</Text>)
                    // : data ? (<Text></Text>)
                         !pokemon ? (<Text></Text>)   
                        : !species ? (<Text></Text>)
                         : 
                        <View style={styles.container}>
                            {/* <Text style={styles.name}>{data.name}</Text> */}
                            {/* <Text style={styles.name}>{pokemon.name}</Text> */}
                            <Text style={styles.name}>{species.names.find(elem => elem.language.name === "fr").name}</Text>
                           
                            {/* <Text>{species.color.name}</Text> */}
                            <Text>Type: <Text style={styles.attribut}>{capitalizeFirstLetter(pokemon.types[0].type.name)}</Text></Text>
                            
                            <Text>Abilities: <Text style={styles.attribut}>{capitalizeFirstLetter(pokemon.abilities[0].ability.name)}, {capitalizeFirstLetter(pokemon.abilities[1].ability.name)}</Text></Text>
                            {
                            species.habitat && species.color && (
                            <>
                            <Text>Habitat: <Text style={styles.attribut}>{capitalizeFirstLetter(species.habitat.name)}</Text></Text>
                            <Text>Color: <Text style={styles.attribut}>{capitalizeFirstLetter(species.color.name)}</Text></Text>
                            </>
        
                                )
                            }
                            <Text>Weight: <Text style={styles.attribut}>{pokemon.weight}</Text></Text>
                            <Text>#{pokemon.id}</Text>
                            
                            {/* <Image
                            source={{uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+num+".png"}} 
                            style={{width: 200, height: 200}}
                            /> */}
                            <Image
                              source={{uri:pokemon.sprites.other["home"].front_default}}
                            // source={{uri:pokemon.sprites.front_default}}
                            // source={{uri:pokemon.sprites.other["official-artwork"].front_default}}
                          
                            style={{width: 300, height: 300}}
                            />
                           
                            <Text style={styles.description}><Text style={styles.attribut}>Description: </Text>{species.flavor_text_entries.find(elem => elem.language.name === "fr").flavor_text}</Text>
                            
                          
                        
                        </View>
                        }

                
            

</View>

)

}
const styles = StyleSheet.create({
    container: {
      flex: 0,
      height:"100%",
      backgroundColor: 'honeydew',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 95,
        
    },
    name: {
      fontSize: 30,
      fontStyle: "normal",
      fontWeight: "bold",
      textTransform: "uppercase", 
      color: "steelblue",
      paddingBottom: 5
    },
    description : {
        // paddingBottom: 25,
        paddingTop: 45,
        color: "darkslategray"

    },
    attribut:{
        fontWeight: "bold"
    }
  });
  