import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
export function AdicionarPlanta({ navigation }) {
  const [novaPublicacao, setNovaPublicacao] = useState({ foto: null });
  const [genetica, setGenetica] = useState(null);
  const [foto,setFoto]=useState(false)
  const [regiao, setRegiao] = useState(null);
  const [metodoCultivo, setMetodoCultivo] = useState(null);
  const [tipoFlor, setTipoFlor] = useState(null);

  const escolherFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadNoFirebase(result);
    }
  };
  const uploadNoFirebase = async (foto) => {
    const { uri } = foto;
    const imagem = await fetch(uri);
    const arquivoBlob = await imagem.blob();

    const randomName = (Math.random() + 10).toString(36).substring(2);

    const imageRef = firebase
      .storage()
      .ref(`biblioteca/foto-${randomName}.jpg`)
      .put(arquivoBlob)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      });

    imageRef.then((url) => {
      alert("Fez upload");
      console.log("URL", url);
      setNovaPublicacao({ ...novaPublicacao, foto: url });
      console.log('FOTOATUALIZADA',novaPublicacao.foto);
    });
  };

  const publicarMensagemNoFirebase = () => {
    firebase
      .database()
      .ref("Plantas/")
      .push(novaPublicacao)
      .then((data) => {
        console.log("salvou! ", data);
      })
      .catch((error) => {
        console.log("Erro ao salvar mensagem ", error);
      });
  };
  useEffect(() => {
    console.log(regiao, metodoCultivo, genetica, tipoFlor,foto);
    setNovaPublicacao({
      ...novaPublicacao,
      regiao: regiao,
      metodoCultivo: metodoCultivo,
      genetica: genetica,
      tipoFlor: tipoFlor,
      foto:foto
    });
  }, [regiao, metodoCultivo, genetica, tipoFlor,foto]);
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.Text}>Nome da Planta:</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(mensagem) =>
            setNovaPublicacao({ ...novaPublicacao, nome: mensagem })
          }
        />
        <Text style={styles.Text}>Nascimento:</Text>
        <View style={styles.nascimento}>
          <View style={styles.Data}>
            <Text style={styles.Text}>Dia:</Text>
            <TextInput
              style={styles.InputData}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(data) =>
                setNovaPublicacao({ ...novaPublicacao, dia: data })
              }
            />
          </View>
          <View style={styles.Data}>
            <Text style={styles.Text}>Mes:</Text>
            <TextInput
              style={styles.InputData}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(data) =>
                setNovaPublicacao({ ...novaPublicacao, mes: data })
              }
            />
          </View>
          <View style={styles.Data}>
            <Text style={styles.Text}>Ano:</Text>
            <TextInput
              style={styles.InputData}
              keyboardType="numeric"
              maxLength={4}
              onChangeText={(data) =>
                setNovaPublicacao({ ...novaPublicacao, ano: data })
              }
            />
          </View>
        </View>

        <Text style={styles.Text}>Regiao:</Text>
        <View style={styles.ContainerCheckBox}>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Norte</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                regiao == "norte" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setRegiao("norte");
                setNovaPublicacao({ ...novaPublicacao, regiao: regiao });
              }}
            ></Pressable>
          </View>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Nordeste</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                regiao == "nordeste" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setRegiao("nordeste");
                setNovaPublicacao({ ...novaPublicacao, regiao: regiao });
              }}
            ></Pressable>
          </View>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Centro-Oeste</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                regiao == "centro-oeste" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setRegiao("centro-oeste");
                setNovaPublicacao({ ...novaPublicacao, regiao: regiao });
              }}
            ></Pressable>
          </View>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Suldeste</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                regiao == "suldeste" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setRegiao("suldeste");
                setNovaPublicacao({ ...novaPublicacao, regiao: regiao });
              }}
            ></Pressable>
          </View>

          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Sul</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                regiao == "sul" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setRegiao("sul");
                setNovaPublicacao({ ...novaPublicacao, regiao: regiao });
              }}
            ></Pressable>
          </View>
        </View>
        <Text style={styles.Text}>Metodo de cultivo:</Text>
        <View style={styles.ContainerCheckBox}>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Indoor</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                metodoCultivo == "indoor" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setMetodoCultivo("indoor");
                setNovaPublicacao({ ...novaPublicacao, metodo: metodoCultivo });
              }}
            ></Pressable>
          </View>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Outdoor</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                metodoCultivo == "outdoor" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setMetodoCultivo("outdoor");
                setNovaPublicacao({ ...novaPublicacao, metodo: metodoCultivo });
              }}
            ></Pressable>
          </View>
        </View>
        <Text style={styles.Text}>Tipo de Floracao:</Text>
        <View style={styles.ContainerCheckBox}>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Fotoperiodo</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                tipoFlor == "fotoperiodo" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setTipoFlor("fotoperiodo");
                setNovaPublicacao({
                  ...novaPublicacao,
                  tipoFloracao: tipoFlor,
                });
              }}
            ></Pressable>
          </View>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Automatica</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                tipoFlor == "automatica" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setTipoFlor("automatica");
                setNovaPublicacao({
                  ...novaPublicacao,
                  tipoFloracao: tipoFlor,
                });
              }}
            ></Pressable>
          </View>
        </View>
        <Text style={styles.Text}>Inicio da Floracao:</Text>
        <View style={styles.nascimento}>
          <View style={styles.Data}>
            <Text style={styles.Text}>Dia:</Text>
            <TextInput
              style={styles.InputData}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(data) =>
                setNovaPublicacao({ ...novaPublicacao, diaFlor: data })
              }
            />
          </View>
          <View style={styles.Data}>
            <Text style={styles.Text}>Mes:</Text>
            <TextInput
              style={styles.InputData}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={(data) =>
                setNovaPublicacao({ ...novaPublicacao, mesFlor: data })
              }
            />
          </View>
          <View style={styles.Data}>
            <Text style={styles.Text}>Ano:</Text>
            <TextInput
              style={styles.InputData}
              keyboardType="numeric"
              maxLength={4}
              onChangeText={(data) =>
                setNovaPublicacao({ ...novaPublicacao, anoFlor: data })
              }
            />
          </View>
        </View>
        <Text style={styles.Text}>Quantidade de Flores:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.TextInput}
          onChangeText={(mensagem) =>
            setNovaPublicacao({ ...novaPublicacao, quantDeFlores: mensagem })
          }
        />
        <Text style={styles.Text}>Fertilizante:</Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(mensagem) =>
            setNovaPublicacao({ ...novaPublicacao, fertilizante: mensagem })
          }
        />

        <Text style={styles.Text}>Tamanho de vaso em Litros:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.TextInput}
          onChangeText={(mensagem) =>
            setNovaPublicacao({ ...novaPublicacao, tamanhoVaso: mensagem })
          }
        />

        <Text style={styles.Text}>Genetica da Predominante</Text>
        <View style={styles.ContainerCheckBox}>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Sativa</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                genetica == "sativa" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setGenetica("sativa");
                setNovaPublicacao({
                  ...novaPublicacao,
                  geneticaPred: genetica,
                });
              }}
            >
              {genetica && <Text size={24} color="white"></Text>}
            </Pressable>
          </View>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Indica</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                genetica == "indica" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setGenetica("indica");
                setNovaPublicacao({
                  ...novaPublicacao,
                  geneticaPred: genetica,
                });
              }}
            >
              {genetica && (
                <Text name="checkmark" size={24} color="white"></Text>
              )}
            </Pressable>
          </View>
          <View style={styles.BoxCheck}>
            <Text style={{ fontSize: 11 }}>Hibrida</Text>
            <Pressable
              style={[
                styles.checkboxBase,
                genetica == "hibrida" && styles.checkboxChecked,
              ]}
              onPress={() => {
                setGenetica("hibrida");
                setNovaPublicacao({
                  ...novaPublicacao,
                  geneticaPred: genetica,
                });
              }}
            >
              {genetica && (
                <Text name="checkmark" size={24} color="white"></Text>
              )}
            </Pressable>
          </View>
        </View>

        {novaPublicacao.foto && (
          <Image
            style={{ margin:10, width: 100, height: 100, borderRadius: 100 }}
            source={{ uri: novaPublicacao.foto }}
          />
        )}
        <Text style={styles.Button} onPress={escolherFoto}>
          Importar Imagem
        </Text>
        <Text
          style={styles.Button}
          onPress={() => {
            publicarMensagemNoFirebase()
            alert('SALVOU')


          }}
        >
          Salvar Planta
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor:'red'
  },
  BoxCheck: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ContainerCheckBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    backgroundColor:'gray'
  },
  Data: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "black",
  },
  checkboxChecked: {
    backgroundColor: "red",
  },
  Button: {
    fontSize: 22,
    borderWidth: 1,
    textAlign: "center",
    width: "80%",
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "green",
    color: "black",
    fontWeight: "bold",
  },
  Text: {
    fontSize: 22,
    marginTop: 10,
  },
  InputData: {
    borderBottomWidth: 1,
    fontSize: 22,
    width: "40%",
  },
  TextInput: {
    width: "80%",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#B9B9B9",
    textAlign: "center",
    fontSize: 22,
  },
  nascimento: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    borderRadius: 5,
    borderWidth: 1,
  },
  contentContainer: {
    backgroundColor: "white",
    alignItems: "center",
    backgroundColor:'gray'
  },
});
