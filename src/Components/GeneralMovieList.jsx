import React from "react";
import GeneralList from "../Constants/GeneralList";
import MovileList from "./MovileList";

function GeneralMovieList() {
  return (
    <div>
      {GeneralList.genresList.map(
        (genre, index) =>
          index <= 4 && (
            <div key={index} className="p-8 md:px-16">
              <h2 className="text-[20px] font-bold text-white">{genre.name}</h2>
              <MovileList genreId={genre.id} index_={index} />
            </div>
          ),
      )}
    </div>
  );
}

export default GeneralMovieList;
