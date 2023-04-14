import { useEffect, useState, createContext, useContext } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  const displayMovies = async () => {
    const url = "https://www.omdbapi.com/?s=over&apikey=c17903c3";
    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };

  const getMovies = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=c17903c3`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    if (!search) {
      displayMovies();
    }
    getMovies(search);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        search,
        movies,
        favourites,
        setSearch,
        setMovies,
        setFavourites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

export const useMovies = () => useContext(MovieContext);