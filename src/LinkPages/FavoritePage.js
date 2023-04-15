import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import { useMovies } from "../context/MovieContext";
// import RemoveFavourite from "../components/removeFavourite";
// import Footer from "../components/footer";

const Favourites = () => {
    // eslint-disable-next-line
  const { favourites, movie } = useMovies();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="mt-4">
        <h1 className=" text-black text-center text-4xl font-sans font-semibold">
          Favourite Movies
        </h1>
      </div>

      <div className="flex flex-col flex-wrap mt-5  space-x-8 justify-center items-center md:flex-row ">
        <MovieCard moviestoShow={favourites} />
      </div>
    </>
  );
};

export default Favourites;