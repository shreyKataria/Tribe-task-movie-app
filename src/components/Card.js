import ReactReadMoreReadLess from "react-read-more-read-less";

const Card = ({ movie, handleFavourite }) => {
  return (
    <div className="flex justify-center">
      <div className="block max-w-[16rem] h-[34.4rem]  rounded-lg  shadow-lg dark:bg-white">
        <a href="#!">
          <img
            className="rounded-t-lg h-[25rem]"
            src={movie.Poster}
            alt="movie"
          />
        </a>
        <div className="py-4 px-5 flex flex-col ">
          <h5 className="text-lg leading-tight  ">
            <ReactReadMoreReadLess
              charLimit={14}
              readMoreText={"more"}
              readLessText={"...less"}
            >
              {movie.Title}
            </ReactReadMoreReadLess>
          </h5>
          <div className="mt-3 text-base space-x-3 ">
            <p className="w-[5rem] rounded-lg">
              {movie.Year}
            </p>
          </div>
          <div className="mt-3 text-base space-x-3"  >
          <button
            type="button"
            className="bg-transparent hover:bg-gray-300	 text-black font-semibold hover:black  py-2 px-4 border border-black hover:border-transparent rounded"
            data-te-ripple-init
            data-te-ripple-color="dark"
            onClick={() => handleFavourite(movie)}
          >
             Add/Remove Favourite
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;