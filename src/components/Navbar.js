import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="bg-slate-900 h-15 p-4">
      <nav className="flex justify-evenly items-center space-x-10 sm:space-x-28  ">
        <h2 className="text-2xl text-zinc-400	 font-semibold font-sans	 xs:text-3xl">
          {" "}
          Movie App
        </h2>

        <ul className="flex space-x-7  sm:space-x-14">
          <li className="bg-transparent hover:bg-gray-300	 text-zinc-400 font-semibold hover:text-black py-2 px-2 hover:border-transparent rounded"
>
            <Link to="/">
              {" "}
              <i className="fa-solid fa-house-user text-lg xs:text-xl sm:text-2xl sm:hidden"></i>
              <span className="hidden sm:flex">Home</span>
            </Link>{" "}
          </li>
          <li className="bg-transparent hover:bg-gray-300	 text-zinc-400 font-semibold hover:text-black py-2 px-2  hover:border-transparent rounded"
>
            <Link to="/favourites">
              {" "}
              {/* <faHeart/> */}
              <i className="fa-solid fa-star text-lg xs:text-xl sm:text-2xl sm:hidden"></i>
              {" "}
              <span className="hidden sm:flex">Favourites</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

