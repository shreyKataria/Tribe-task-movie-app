import Navbar from "../components/Navbar";

import SearchBox from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { useMovies } from "../context/MovieContext";

const Homepage = ({ children }) => {
  const { movies } = useMovies();

  return (
    <main className="bg-slate-200 min-h-screen">
      <Navbar />

  

      <section
        id="search"
        className=" flex flex-col h-auto   items-center bg-slate-200 "
      >
        <SearchBox />

        <div className="flex items-start p-5 gap-4 flex-wrap  justify-center ">
          <MovieCard moviestoShow={movies} />
        </div>
      </section>

      
    </main>
  );
};

export default Homepage;