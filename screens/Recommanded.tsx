import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Recommanded: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is The Recommanded Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Recommanded;
