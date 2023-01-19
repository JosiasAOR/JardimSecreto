import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
export function MyCheckBox() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.Text} >Norte</Text>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => setChecked(!checked)}
      >
        {checked && <Text name="checkmark" size={24} color="white"></Text>}
      </Pressable>
      <Text style={styles.Text}>Nordeste</Text>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => setChecked(!checked)}
      >
        {checked && <Text name="checkmark" size={24} color="white"></Text>}
      </Pressable>
      <Text style={styles.Text}>Centro-Oeste</Text>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => setChecked(!checked)}
      >
        {checked && <Text name="checkmark" size={24} color="white"></Text>}
      </Pressable>
      <Text style={styles.Text}>Suldeste</Text>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => setChecked(!checked)}
      >
        {checked && <Text name="checkmark" size={24} color="white"></Text>}
      </Pressable>
      <Text style={styles.Text}>Sul</Text>
      <Pressable
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => setChecked(!checked)}
      >
        {checked && <Text name="checkmark" size={24} color="white"></Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "gray",
  },
  container: {
    flexDirection: "column",
    alignSelf: "center",
    width:'80%',
    flexWrap:"wrap",
    justifyContent:'center',
    alignItems:"center",
    alignContent:'space-between'
  },
  Text:{
    fontSize:18
  }
});
