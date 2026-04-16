import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import AbcTest from "./src/components/AbcTest";

export default function App() {
  const name = "Firas";
  return (
    <View style={styles.container}>
      <Text>Hello, .... !!!</Text>
      <AbcTest name={name} />
      <Button title="Click me !" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
