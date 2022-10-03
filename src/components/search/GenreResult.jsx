import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "shared/api";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import SearchMovie from "./SearchMovie";

const GenreResult = () => {
  const params = useParams();
  const keyword = params.keyword;
  const getGenreList = async () => {
    return await api.get(`/main/search/${keyword}/1`);
  };

  const genreListQuery = useQuery(["genreList", keyword], getGenreList, {
    onSuccess: (data) => {},
  });

  if (genreListQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div>
        <div className="mt-8">
          <p className="text-2xl text-mCream ml-10">{keyword}장르 영화입니다</p>
          <div className="mt-2 flex items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col">
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
              {genreListQuery?.data.data.data.results.map((movie) => {
                return <SearchMovie {...movie} key={movie.movieId} />;
              })}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreResult;
