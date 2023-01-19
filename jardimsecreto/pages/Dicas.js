import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { CheckBox } from "react-native-web";

function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

export function Dicas({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
    </View>
  );
}
