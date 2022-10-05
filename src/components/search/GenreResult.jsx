import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "shared/api";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

const GenreResult = () => {
  const params = useParams();
  const keyword = params.keyword;

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
    if (element.genre == keyword) {
      return element.category;
    }
  }
  const { category } = categoryEng.filter(findGenre)[0];

  const getGenreList = async (pageParam) => {
    const res = await api.get(`/main/search/${category}/${pageParam}`);
    const { results, page } = res.data.data;
    return { results, page };
  };

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["genreList", keyword],
    ({ pageParam = 1 }) => getGenreList(pageParam),
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
    <div>
      <div>
        <div className="mt-8">
          <p className="text-2xl text-mCream ml-10">
            {keyword} 장르 영화입니다
          </p>
          <div className="mt-2 items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col">
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
              {data?.pages.map((page, index) => (
                <React.Fragment key={index}>
                  {page.results.map((movie) => (
                    <SearchMovie {...movie} key={movie.movieId} />
                  ))}
                </React.Fragment>
              ))}
            </section>
          </div>
        </div>
        {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
      </div>
    </div>
  );
};

export default GenreResult;
