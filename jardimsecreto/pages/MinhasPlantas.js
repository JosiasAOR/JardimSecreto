import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import * as firebase from "firebase";
import { CheckBox } from "../componets/CheckBox";
// import { initializeApp } from "firebase/app"
import { Plantas } from "../componets/Plantas";
export function MinhasPlantas({ navigation }) {
  const [publicacoes, setPublicacoes] = useState([]);
  const [novaPublicacao, setNovaPublicacao] = useState({ texto: null });

  useEffect(() => {
    carregarMensagensDoFirebase();
  }, []);

  const carregarMensagensDoFirebase = () => {
    firebase
      .database()
      .ref("Plantas/")
      .on("value", (snapshot) => {
        const mensagens = [];
        snapshot.forEach((mensagem) => {
          mensagens.unshift(mensagem.val());
        });

        setPublicacoes(mensagens);
      });
  };

  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    function TrocarTela(item) {
      console.log(item.nascimento, "DIA QUE NASCEU");
      navigation.navigate("Visualizar Planta", { item });
    }

    return (
      <Plantas
        nome={item.nome}
        img={item.foto}
        tipoDeLuz={item.genetica}
        dia={item.dia}
        mes={item.mes}
        ano={item.ano}
        onPress={() => TrocarTela(item)}
      />
    );
  };
  return (
    <View style={styles.view}>
      <Text
        style={{
          fontSize: 42,
          backgroundColor: "red",
          height: 200,
          textAlign: "center",
          textAlignVertical: "center",
        }}
        onPress={() => {
          console.log(publicacoes);
        }}
      >
        CONSOLE.LOG
      </Text>
      <FlatList
        data={publicacoes}
        renderItem={renderItem}
        keyExtractor={(item) => item.texto}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "gray",
  },
});
