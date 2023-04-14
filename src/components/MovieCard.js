import { useMovies } from "../context/MovieContext";
import { Toaster, toast } from "react-hot-toast";
import Card from "./Card";

const MovieCard = ({ moviestoShow }) => {
  const { favourites, setFavourites } = useMovies();

  const handleFavourite = (movie) => {
    let newFavourites = [];
    if (favourites.includes(movie)) {
      newFavourites = favourites.filter((_movie) => _movie !== movie);
      toast.error('removed from favorite')
    } else {
      newFavourites = [...favourites, movie];
      toast.success('added to favorite')
    }
    setFavourites(newFavourites);
  };

  return (
    <>
      {moviestoShow.map((movie) => {
        return (
          <Card
            key={movie.imdbID}
            movie={movie}
            handleFavourite={handleFavourite}
          />
          
        );
      })}
      <Toaster/>
    </>
  );
};

export default MovieCard;