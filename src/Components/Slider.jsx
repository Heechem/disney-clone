import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

// const for the images width
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovielist] = useState([]);

  const elementRef = useRef();

  // fetching move fct
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => setMovielist(res.data.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  // slider arrow button function

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <>
      <div>
        <HiChevronLeft
          className="absolute mx-8 mt-[150px] hidden cursor-pointer text-[30px] text-white md:block"
          onClick={() => sliderLeft(elementRef.current)}
        />

        <HiChevronRight
          className="absolute right-0  mx-8 mt-[150px] hidden cursor-pointer text-[30px] text-white md:block"
          onClick={() => sliderRight(elementRef.current)}
        />

        <div
          className="flex w-full overflow-x-auto scroll-smooth px-16 py-4 scrollbar-hide"
          ref={elementRef}
        >
          {movieList.map((item, index) => (
            <img
              src={IMG_BASE_URL + item.backdrop_path}
              className="duration-120 mr-5 min-w-full rounded-md border-gray-300 object-cover object-left-top transition-all ease-in-out hover:border-[4px] md:h-[310px] lg:object-fill"
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Slider;
