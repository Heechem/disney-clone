import React from "react";
import GlobalApi from "../Services/GlobalApi";

const IMG_URL = GlobalApi.IMG_BASE_URL;

function HrMovieCard({ movie }) {
  return (
    <section className="transition-all duration-150 ease-in-out  hover:scale-110 hover:shadow-gray-400">
      <img
        src={IMG_URL + movie.backdrop_path}
        alt=""
        className="duration-180 w-[110px] cursor-pointer rounded-lg border-gray-400  shadow-sm  transition-all duration-150 ease-in-out hover:scale-110 hover:border-[3px] hover:shadow-gray-400 lg:w-[260px] "
      />
      <h2 className=" mt-2 w-[110px]  text-white lg:w-[260px]">
        {movie.title}
      </h2>
    </section>
  );
}

export default HrMovieCard;
