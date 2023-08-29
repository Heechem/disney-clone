import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";

import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovileList({ genreId, index_ }) {
  // set the array for the movie list
  const [movieList, setMovieList] = useState([]);

  //ref focus

  const elementRef = useRef();

  // the effect to rund the fetching on mount
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  // function to fetch movie gnere
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenre(genreId).then((res) =>
      setMovieList(res.data.results),
    );
  };

  // slider arrow button function

  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        className={`absolute z-10 mt-[150px] hidden cursor-pointer p-2 text-[50px] text-white md:block ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
        }
        `}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <div
        className="flex gap-8 overflow-x-auto scroll-smooth px-3  py-4 scrollbar-hide"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <React.Fragment key={index}>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard key={index} movie={item} />
            )}
          </React.Fragment>
        ))}
      </div>
      <IoChevronForward
        className={`absolute right-0 top-0 z-10 mt-[150px] hidden cursor-pointer p-2 text-[50px] text-white md:block ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
        } `}
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
}

export default MovileList;
