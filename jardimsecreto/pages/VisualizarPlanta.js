import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect } from "react";

export function VisualizarPlanta({ route }) {
  const { item } = route.params;

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <View style={styles.view}>
      <Image style={styles.img} source={{ uri: item.foto }} />
        <Text style={styles.text}> Nome: {item.nome}</Text>
        <Text style={styles.text}> Fertilizante: {item.fertilizante}</Text>
        <Text style={styles.text}> Genetica: {item.genetica}</Text>
        <Text style={styles.text}> Metodo de cultivo: {item.metodoCultivo}</Text>
        <Text style={styles.text}> Regiao: {item.regiao}</Text>
        <Text style={styles.text}> Tipo de Floracao: {item.tipoFlor}</Text>
        <Text style={styles.text}> Quantidade de Flores: {item.quantDeFlores}</Text>

{item.tamanhoVaso&&(<Text style={styles.text}> Tamanho do vaso: {item.tamanhoVaso}L</Text>)
}
</View>
  );
}

const styles = StyleSheet.create({
  img: {
    marginTop: 2,
    width: "98%",
    height: 300,
    borderRadius: 5,
  },
  view: {
    flex: 1,
    backgroundColor: "white",
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: "center",
    justifyContent:'center'
     },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    backgroundColor: "green",
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    width: "98%",
    height: 50,
    borderColor: "black",
    margin: 2,
  },
});
