import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { loadAsync } from "expo-font";
import { Avatar } from "react-native-elements";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const Header: React.FC = () => {
  const [font, setFont] = React.useState("");
  const loadFont = async () => {
    return loadAsync({
      Righteous: require("../assets/Righteous.ttf"),
    }).then(() => setFont("Righteous"));
  };
  React.useEffect(() => {
    loadFont();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.brand, fontFamily: font }}>MovieDB</Text>
      <Avatar icon={{ name: "search", color: "#1D2E28" }} size={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT * 0.18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 23,
    justifyContent: "space-between",
  },
  brand: {
    textAlign: "left",
    color: "#1D2E28",
    fontSize: 35,
  },
});

export default Header;
