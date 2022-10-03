import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "shared/api";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

const GenreResult = () => {
  // const params = useParams();
  // const keyword = params.keyword;
  // const getGenreList = async () => {
  //   return await api.get(`/main/search/${keyword}/1`);
  // };

  // const categoryEng = [
  //   { category: "drama", genre: "드라마 " },
  //   { category: "romance", genre: "로맨스 " },
  //   { category: "horror", genre: "공포 " },
  //   { category: "action", genre: "액션 " },
  //   { category: "fantasy", genre: "판타지 " },
  //   { category: "comedy", genre: "코미디 " },
  //   { category: "animation", genre: "애니매이션 " },
  //   { category: "thriller", genre: "스릴러 " },
  // ];
  // function findGenre(element) {
  //   if (element.category == keyword) {
  //     return element.genre;
  //   }
  // }
  // const { genre } = categoryEng.filter(findGenre)[0];

  // const genreListQuery = useQuery(["genreList", keyword], getGenreList, {
  //   onSuccess: (data) => {},
  // });

  // if (genreListQuery.isLoading) {
  //   return <Spinner />;
  // }

  const params = useParams();
  const keyword = params.keyword;

  const getGenreList = async (pageParam) => {
    const res = await api.get(`/main/search/${keyword}/${pageParam}`);
    const { results, page } = res.data.data;
    return { results, page };
  };
  const categoryEng = [
    { category: "drama", genre: "드라마 " },
    { category: "romance", genre: "로맨스 " },
    { category: "horror", genre: "공포 " },
    { category: "action", genre: "액션 " },
    { category: "fantasy", genre: "판타지 " },
    { category: "comedy", genre: "코미디 " },
    { category: "animation", genre: "애니매이션 " },
    { category: "thriller", genre: "스릴러 " },
  ];
  function findGenre(element) {
    if (element.category == keyword) {
      return element.genre;
    }
  }
  const { genre } = categoryEng.filter(findGenre)[0];

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
          <p className="text-2xl text-mCream ml-10">{genre}장르 영화입니다</p>
          <div className="mt-2 items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col">
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
              {/* {genreListQuery?.data.data.data.results.map((movie) => {
                return <SearchMovie {...movie} key={movie.movieId} />;
              })} */}
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
      </div>
      {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
    </div>
  );
};

export default GenreResult;
