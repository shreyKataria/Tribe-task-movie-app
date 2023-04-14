import { useMovies } from "../context/MovieContext";

const SearchBox = () => {
  const { search, setSearch } = useMovies();

  return (
    <div className="hover:scale-105 ease-in duration-100">
      <input
        type="text"
        className="form-control w-80 md:w-[30rem] p-3 h-9 rounded-md outline-0 mt-5 "
        placeholder="Browse Movies"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;