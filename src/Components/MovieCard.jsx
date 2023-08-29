import GlobalApi from "../Services/GlobalApi";

const IMG_URL = GlobalApi.IMG_BASE_URL;

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMG_URL + movie.poster_path}
        alt=""
        className="duration-180 w-[110px] cursor-pointer rounded-lg border-gray-400  shadow-sm  transition-all ease-in-out hover:scale-110 hover:border-[3px] hover:shadow-gray-400 md:w-[200px] "
      />
    </>
  );
}

export default MovieCard;
