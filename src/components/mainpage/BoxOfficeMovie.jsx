import React from "react";
import { Link } from "react-router-dom";

const BoxOfficeMovie = ({ rank, id, title, poster_path }) => {
  const ImgSrc = `https://image.tmdb.org/t/p/w342/${poster_path}`;

  return (
    <div className="relative h-96 cursor-pointer">
      {/* 영화 순위 */}
      <div className="absolute top-0 left-4 mb-1 text-7xl font-bold text-mCream z-10">
        {rank}
      </div>

      <Link to={`/detail/${id}/${title}${poster_path.split(".")[0]}`}>
        {/* 영화 포스터 */}
        <img
          src={ImgSrc}
          alt="movie_poster"
          className="relative top-7 left-24 lg:left-16 w-40 h-60 z-40 bg-cover"
        />
        {/* 영화 제목 */}
        <div className=" relative top-10 left-24 lg:left-16 text-mYellow z-10 my-2.5 mr-10 w-3/6 lg:w-4/6 leading-5 tracking-wider">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default BoxOfficeMovie;
