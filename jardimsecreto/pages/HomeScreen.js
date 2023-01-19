import { View, StyleSheet, Text, ImageBackground } from "react-native";

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/54/4c/ea/544cea6816894c67eabad87c44eabd28--cannabis-wallpaper-weed-wallpaper-iphone.jpg",
        }}
        style={styles.imageBackground}
      >
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("Adicionar Planta")}
        >
          Adicionar planta
        </Text>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("Minhas Plantas")}
        >
          Minhas plantas
        </Text>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("Dicas")}
        >
          Dicas de cultivo
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignContent: "space-between",
    backgroundColor: "grey",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "black",
    fontSize: 34,
    width: "80%",
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor:'white',
    color:'white'
  },
});
