import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
import { getSearchResult } from "apis/movieApi";
import { MovieListContainer, MovieList, InputResult } from "./GenreResult";

// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

const SearchResult = () => {
  const params = useParams();
  const keyword = params.keyword;

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "searchList",
    ({ pageParam = 1 }) => getSearchResult(keyword, pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length === 0) {
          return undefined;
        } else {
          return lastPage.page + 1;
        }
      },
    }
  );
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Spinner />;

  return (
    <>
      <div className="md:mt-8">
        <InputResult>"{keyword}" 검색결과</InputResult>
        <MovieListContainer>
          <MovieList>
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((movie) => (
                  <SearchMovie {...movie} key={movie.movieId} />
                ))}
              </React.Fragment>
            ))}
          </MovieList>
        </MovieListContainer>
      </div>
      {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
    </>
  );
};

export default SearchResult;
