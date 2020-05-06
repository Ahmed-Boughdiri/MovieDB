import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Recent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>This is The Recent Screen</Text>
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

export default Recent;
