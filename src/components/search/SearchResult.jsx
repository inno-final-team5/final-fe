import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
import { getSearchResult } from "apis/movieApi";
import { MovieListContainer, MovieList, InputResult } from "./GenreResult";

// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { useState } from "react";

const SearchResult = () => {
  const params = useParams();
  const keyword = params.keyword;
  const queryClient = useQueryClient();
  const [mySearch, setMySearch] = useState([]);

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery(
    "searchResult",
    async ({ pageParam = 1 }) => await getSearchResult(keyword, pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.results.length === 0) {
          return undefined;
        } else {
          return lastPage.page + 1;
        }
      },
      onSuccess: (result) => {
        setMySearch(result.pages[0].results);
      },
    }
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  useEffect(() => {
    queryClient.setQueryData("searchResult");
  }, [keyword]);

  if (status === "loading") return <Spinner />;
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="md:mt-8">
        <InputResult>"{keyword}" 검색결과</InputResult>
        {mySearch?.length > 0 ? (
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
        ) : (
          <div className="pt-14 pb-14 mt-4 w-full pl-6 container mx-auto rounded-3xl bg-mGray">
            <section className="flex-col flex text-mYellow text-xl ml-6">
              <p>검색결과가 없어요🥲</p>
              <p className="mt-2">검색하실 영화제목을 다시 입력해주세요</p>
            </section>
          </div>
        )}
      </div>
      {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
    </>
  );
};

export default SearchResult;
