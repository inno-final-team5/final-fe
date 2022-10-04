import React, { useState } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import { api } from "shared/api";
import { useParams, Link } from "react-router-dom";

const MovieSum = () => {
  const getMovieSum = async () => {
    return await api.get(`/movie/detail/${id}`);
  };
  const [img, setImg] = useState(null);
  const params = useParams();
  const id = params.id;
  const title = params.title;
  const poster = params.poster_path;

  const movieQuery = useQuery("movieList", getMovieSum, {
    onSuccess: (data) => {
      setImg(`https://image.tmdb.org/t/p/w342` + data.data.data.poster_path);
    },
  });

  if (movieQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <section className="mt-2">
        <div className="pt-6 pb-6 bg-mGray rounded-3xl container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-40 md:w-1/3 w-30 mb-10 md:mb-0">
            <img src={img} alt="영화포스터" />
          </div>
          <div className="lg:flex-grow md:w-2/3 lg:pl-18 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="flex">
              <h1 className="title-font sm:text-4xl text-white text-3xl mb-4 font-medium">{movieQuery?.data.data.data.title}</h1>
              <RiHeartAddLine className="flex ml-2 text-red-500" size={30} />
            </div>

            <p className="mb-8 text-white leading-relaxed">{movieQuery?.data.data.data.overview}</p>

            <div className="flex lg:flex-row md:flex-row mt-16">
              {movieQuery?.data.data.data.genres.map((movie) => (
                <Link to={`/genre/${movie.name}`}>
                  <button className="bg-mWhite md:px-2 sm:px-3 inline-flex py-2 xl:px-3 ml-2 rounded-full items-center hover:bg-gray-400 focus:outline-none">
                    <span key={movie.id}>{movie.name} </span>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieSum;
