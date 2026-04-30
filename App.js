import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import AbcTest from "./src/components/AbcTest";
import { useState } from "react";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const name = "Firas";
  const [x, setX] = useState("");
  const getData = (data) => {
    setX(data);
    console.log(x);
  };
  const BTab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      {/* <Text>Hello, {x} !!!</Text>
      <AbcTest name={name} getData={getData} />
      <Button title="Click me !" />
      <StatusBar style="auto" /> */}
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
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
