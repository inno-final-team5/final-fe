import React from "react";
import poster from "../../images/poster.png";
import Spinner from "components/common/Spinner";
import axios from "axios";
import { useQuery } from "react-query";
import SearchMovie from "./SearchMovie";

const SearchList = () => {
  const getSearchList = () => {
    return axios.get("http://localhost:3001/movieList");
  };

  const searchListQuery = useQuery("searchList", getSearchList, {
    onSuccess: (data) => {},
  });
  if (searchListQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col">
        <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
          {searchListQuery.data.data.map((movie) => (
            <SearchMovie {...movie} key={movie.movieId} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SearchList;
