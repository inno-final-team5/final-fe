import React, { useEffect } from "react";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
import { getSearchList } from "apis/movieApi";
import { MovieListContainer, MovieList } from "./GenreResult";

// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

const SearchList = () => {
  const { ref, inView } = useInView();

  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "searchList",
    async ({ pageParam = 1 }) => await getSearchList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length === 0) {
          return undefined;
        } else {
          return lastPage.page + 1;
        }
      },
      staleTime: 1000,
      onSuccess: (result) => {},
    }
  );
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Spinner />;

  return (
    <>
      <MovieListContainer>
        <MovieList>
          {data?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => (
                <SearchMovie {...movie} key={movie.movieId} />
              ))}
            </React.Fragment>
          ))}
        </MovieList>
      </MovieListContainer>
      {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
    </>
  );
};

export default SearchList;
