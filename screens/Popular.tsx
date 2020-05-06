import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import Movie from "../components/Movie";
import { getMovies, Movie as MovieProps } from "../global/movies";

const WIDTH = Dimensions.get("window").width;

const Popular: React.FC = () => {
  const [moviesList, setMoviesList] = React.useState([]);
  const hanleMovies = async () => {
    const moviesHandler: any = await getMovies();
    setMoviesList(moviesHandler);
  };
  React.useEffect(() => {
    hanleMovies();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={{ alignItems: "center", paddingVertical: 40 }}>
          {moviesList.map((movie: MovieProps) => (
            <Movie
              name={movie.name}
              tags={movie.tags}
              director={movie.director}
              category={movie.category}
              img={movie.img}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    width: WIDTH,
  },
});

export default Popular;
