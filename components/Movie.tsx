import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Text as Title } from "react-native-elements";
import { Caption } from "react-native-paper";
import { Movie as MovieProps } from "../global/movies";
import { trait } from "../global/traitement";

const Movie: React.FC<MovieProps> = ({
  name,
  tags,
  director,
  category,
  img,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.cardHeader}>
            <Title h4>{trait(name)}</Title>
            <Title h4 style={{ color: "#ffbc03" }}>
              8.0
            </Title>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            {tags.map((tag) => (
              <View style={styles.tagContainer}>
                <Text style={styles.tag}>{tag}</Text>
              </View>
            ))}
          </View>
          <Caption>Director: {director}</Caption>
          <Caption style={{ marginTop: -3 }}>Category: {category}</Caption>
        </View>
      </View>
      <View style={styles.movieImg}>
        <Image
          source={img.uri === "N/A" ? require("../assets/NA.png") : img}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 250,
    width: 320,
    marginTop: -70,
  },
  card: {
    height: 140,
    width: 320,
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
  },
  movieImg: {
    height: 150,
    width: "35%",
    position: "absolute",
    left: 15,
    bottom: 50,
    zIndex: 2,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 11,
  },
  cardContent: {
    width: 250,
    position: "absolute",
    left: 120,
    top: 15,
    paddingLeft: 20,
  },
  cardHeader: {
    width: 165,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tagContainer: {
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 5,
  },
  tag: {
    color: "green",
    fontSize: 10,
    paddingHorizontal: 10,
  },
});

export default Movie;
