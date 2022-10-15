import React from "react";
import { Link } from "react-router-dom";

function SearchMovie({ title, poster_path, id }) {
  const img = `https://image.tmdb.org/t/p/w342/${poster_path}`;

  let poster = "";
  if (poster_path != null) {
    poster = poster_path.split(".")[0];
  }

  const handleImgError = (e) => {
    e.target.src = `http://m.csskin.co.kr/images/common/noimg.jpg?t=`;
  };

  return (
    <div className="h-full">
      <Link to={`/detail/${id}/${title}${poster}`}>
        <div className="relative h-full cursor-pointer">
          <a
            href="#!"
            className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-80 bg-gray-800 duration-300"
          >
            <h1 className="text-2xl md:text-xl sm:text-lg text-mCream font-semibold">{title}</h1>
          </a>
          <div className="relative h-full flex flex-wrap content-center">
            <img className="h-full" alt="영화포스터" onError={handleImgError} src={img} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchMovie;
