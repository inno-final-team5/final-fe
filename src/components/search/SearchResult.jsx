import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import SearchMovie from "./SearchMovie";
import { api } from "shared/api";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
  const params = useParams();
  const keyword = params.keyword;
  const getSearchList = () => {
    return api.get(`/main/search/title/${keyword}/1`);
  };
  const getGenreList = () => {
    return api.get(`/main/search/${keyword}/1`);
  };
  const navigate = useNavigate();

  const searchListQuery = useQuery("searchList", getSearchList, {
    onSuccess: (data) => {
      console.log(data.data.data);
    },
  });

  const genreListQuery = useQuery("genreList", getGenreList, {
    onSuccess: (data) => {
      console.log(data, "keyword");
    },
  });
  if (searchListQuery.isLoading) {
    return <Spinner />;
  }
  if (searchListQuery?.data.data.data.results.length === 0) {
    alert("검색결과가 없습니다.");
    navigate(`/search`);
  }
  return (
    <div>
      <div className="mt-8">
        <p className="text-2xl text-mCream ml-10">"{keyword}" 검색결과</p>
        <div className="mt-2 flex items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col">
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
            {searchListQuery?.data.data.data.results.map((movie) => (
              <SearchMovie {...movie} key={movie.movieId} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
