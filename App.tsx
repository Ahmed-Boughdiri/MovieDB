import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Popular from "./screens/Popular";
import Recent from "./screens/Recent";
import Recommanded from "./screens/Recommanded";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: "#EDEEEE",
            },
            indicatorStyle: {
              backgroundColor: "#ffbc03",
            },
          }}
        >
          <Tab.Screen name="Popular" component={Popular} />
          <Tab.Screen name="Recent" component={Recent} />
          <Tab.Screen name="Recomanded" component={Recommanded} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEEEE",
  },
});
