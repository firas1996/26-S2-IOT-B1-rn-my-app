import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import AbcTest from "./src/components/AbcTest";
import { useState } from "react";
import Login from "./src/screens/Login";

export default function App() {
  const name = "Firas";
  const [x, setX] = useState("");
  const getData = (data) => {
    setX(data);
    console.log(x);
  };
  return (
    <View style={styles.container}>
      {/* <Text>Hello, {x} !!!</Text>
      <AbcTest name={name} getData={getData} />
      <Button title="Click me !" />
      <StatusBar style="auto" /> */}
      <Login />
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
