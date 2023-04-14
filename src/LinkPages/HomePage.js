import Navbar from "../components/Navbar";
// import bg3 from "../assets/bg-3.jpg";
// import bg4 from "../assets/bg-4.jpg";
// import bg5 from "../assets/bg-5.jpg";
// import bg6 from "../assets/bg-6.jpg";
// import AddFavourite from "../components/AddFavorite";

import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
// import Footer from "../components/footer";
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

      {/* <Footer /> */}
    </main>
  );
};

export default Homepage;