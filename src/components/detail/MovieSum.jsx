import React from "react";
import { RiHeartAddLine } from "react-icons/ri";
import Spinner from "components/common/Spinner";
import axios from "axios";
import { useQuery } from "react-query";

const MovieSum = () => {
  const getMovieSum = () => {
    return axios.get("http://localhost:3001/movieList");
  };

  const movieQuery = useQuery("movieList", getMovieSum, {
    onSuccess: (data) => {},
  });
  if (movieQuery.isLoading) {
    return <Spinner />;
  }
  const detail = movieQuery.data.data[1];
  return (
    <div>
      <section className="mt-2">
        <div className="pt-6 pb-6 bg-mGray rounded-3xl container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
          <div className="lg:w-40 md:w-1/3 w-30 mb-10 md:mb-0">
            <img src={detail.imageUrl} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-18 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="flex">
              <h1 className="title-font sm:text-4xl text-white text-3xl mb-4 font-medium">{detail.title}</h1>
              <RiHeartAddLine className="flex ml-2 text-red-500" size={30} />
            </div>

            <p className="mb-8 text-white leading-relaxed">{detail.story}</p>

            <div className="flex lg:flex-row md:flex-col mt-16">
              <button className="bg-mWhite inline-flex py-2 px-3 rounded-full items-center hover:bg-gray-400 focus:outline-none">
                <span>{detail.tag}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieSum;
