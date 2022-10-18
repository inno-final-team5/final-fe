import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
import tw from "tailwind-styled-components/";
// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { getGenreList } from "apis/movieApi";

const GenreResult = () => {
  const params = useParams();
  const keyword = params.keyword;
  const queryClient = useQueryClient();

  const categoryEng = [
    { category: "drama", genre: "드라마" },
    { category: "romance", genre: "로맨스" },
    { category: "horror", genre: "공포" },
    { category: "action", genre: "액션" },
    { category: "fantasy", genre: "판타지" },
    { category: "comedy", genre: "코미디" },
    { category: "animation", genre: "애니메이션" },
    { category: "thriller", genre: "스릴러" },
    { category: "adventure", genre: "모험" },
    { category: "crime", genre: "범죄" },
    { category: "documentary", genre: "다큐멘터리" },
    { category: "family", genre: "가족" },
    { category: "history", genre: "역사" },
    { category: "music", genre: "음악" },
    { category: "mystery", genre: "미스터리" },
    { category: "scienceFiction", genre: "SF" },
    { category: "tvmovie", genre: "TV 영화" },
    { category: "war", genre: "전쟁" },
    { category: "western", genre: "서부" },
  ];

  function findGenre(element) {
    if (element.genre === keyword) {
      return element.category;
    }
  }
  const { category } = categoryEng.filter(findGenre)[0];

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery(
    ["genreList", keyword],
    async ({ pageParam = 1 }) => await getGenreList(category, pageParam),
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

  useEffect(() => {
    queryClient.setQueryData("genreList");
  }, [keyword]);

  if (status === "loading") return <Spinner />;
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="md:mt-6 mt-0">
        <InputResult className="text-lg md:text-2xl text-mCream ml-10">{keyword} 장르 영화입니다</InputResult>
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
      </div>
      {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
    </>
  );
};

export default GenreResult;

export const MovieListContainer = tw.div`
mt-2 items-center justify-center rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col h-full
`;
export const MovieList = tw.section`pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-4 lg:grid-cols-5 gap-6 p-8 md:gap-12 lg:gap-10 lg:p-12 xl:p-18 xl:gap-14`;

export const InputResult = tw.p`text-base md:text-2xl text-mCream ml-10`;
