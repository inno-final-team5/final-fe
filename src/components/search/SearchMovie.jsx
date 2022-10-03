import React from "react";
import { Link } from "react-router-dom";

function SearchMovie({ title, poster_path, id }) {
  const img = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <div className="">
      <Link to={`/detail/${id}/${title}${poster_path}`}>
        <div className="relative cursor-pointer">
          <a
            href="#!"
            className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-80 bg-gray-800 duration-300"
          >
            <h1 className="text-2xl  text-mCream font-semibold">{title}</h1>
          </a>
          <div className="relative flex flex-wrap content-center">
            <img className="" alt="영화포스터" src={img} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchMovie;
