import React from "react";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import SearchMovie from "./SearchMovie";
import { api } from "shared/api";

const SearchList = () => {
  const getSearchList = () => {
    return api.get(`/movie/1`);
  };

  const searchListQuery = useQuery("searchList", getSearchList, {
    onSuccess: (data) => {
      console.log(data.data.data);
    },
  });

  if (searchListQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col">
        <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
          {searchListQuery?.data.data.data.results.map((movie) => (
            <SearchMovie {...movie} key={movie.movieId} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SearchList;
