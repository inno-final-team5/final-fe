import React from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components/";

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
    <>
      <Link to={`/${id}/${title}${poster}`}>
        <MovieSpace>
          <MovieHover href="#!">
            <MovieTitle>{title}</MovieTitle>
          </MovieHover>
          <MoviePoster>
            <img className="h-full" alt="영화포스터" onError={handleImgError} src={img} />
          </MoviePoster>
        </MovieSpace>
      </Link>
    </>
  );
}

export default SearchMovie;

const MovieSpace = tw.div`
relative h-full cursor-pointer
`;

const MovieHover = tw.a`
absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-80 bg-gray-800 duration-300
`;
const MovieTitle = tw.h1`
text-sm md:text-xl sm:text-lg text-mCream font-semibold
`;
const MoviePoster = tw.div`
relative h-full flex flex-wrap content-center
`;
