
export interface Movie {
    name: string;
    tags: string[];
    director: string;
    category: string;
    img: any;
}

export const movies: Movie[] = [];

const getSearch = () => {
    const words = ["Batman", "mr_robot", "money_heist", "house_of_cards", "lucifer"];
    const ran = Math.floor((Math.random() * 5) - 1);
    return words[ran];
}

export const getMovies = async () => {
    const search = getSearch();
    const response = await fetch(`http://www.omdbapi.com/?apikey=3fe697f1&s=${search}`);
    const results = await response.json();
    const moviesList = results.Search;
    moviesList.map((m: any) => {
        const data: Movie = {
            name: m["Title"],
            tags: [m["Type"], m["imdbID"]],
            director: m["Year"],
            category: m["Type"],
            img: { uri: m["Poster"] }
        }
        movies.push(data);
    })
    return movies;
}
