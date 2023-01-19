import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CountDays } from '../pages/CountDays';
import { useEffect } from 'react';
export function Plantas({ img, nome, tipoDeLuz, dia,mes,ano,onPress }) {
  useEffect(() => {
    console.log(dia,mes,ano)
  }, []);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container1}>
      <Image style={styles.brasao} source={{ uri: img }} />
      <View style={styles.divisao}>
        <View style={styles.nomeEtipoDeLuz}> 
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.tipoDeLuz}>{tipoDeLuz}</Text>
        
        </View>
        <View style={styles.diasdevida} >

        <Text style={styles.trofeu} >Dias de Vida:</Text>
        <Text style={styles.titulos}>{CountDays(new Date(Number(ano),Number(mes)-1,Number(dia)))}</Text>
        
      </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    brasao: {
      width: 60,
      height: 60,
      paddingTop:20,
      borderRadius:5,
      marginLeft:5,
    },
    trofeu: {
      fontSize:18

    },
    diasdevida:{
      flex:1,
      alignItems:'center',
    },
    container1: {
      width:'100%',
      alignItems: 'center',
      alignSelf:'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor:'white',
      borderBottomWidth:1,
      borderColor:'green'
      
  
    },
    nome: {
      paddingTop:1,
      marginTop:20,
      fontSize: 18,
      marginLeft: 10,
    },
    tipoDeLuz: {
      fontSize: 16,
      marginLeft: 10,
      color: '#8a9aa4',
      width: 200,
      marginBottom:10,

    },
    nomeEtipoDeLuz: {
      width: 120,
      marginLeft: 15,
      paddingTop: 1,
      paddingBottom: 10,

    },
    titulos: {
      fontSize:18,
      fontWeight:'bold'
      
    },
    divisao: {
      borderBottomColor: '#d2d9dc',
      width: 320,
      alignItems: 'center',
      flexDirection:'row',
    },
  });
