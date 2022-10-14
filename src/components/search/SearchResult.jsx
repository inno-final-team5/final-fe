import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
import { api } from "shared/api";

// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

const SearchResult = () => {
  const params = useParams();
  const keyword = params.keyword;

  const getSearchList = async (pageParam) => {
    const res = await api.get(`/main/search/title/${keyword}/${pageParam}`);
    const { results, page } = res.data.data;
    return { results, page };
  };

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery("searchList", ({ pageParam = 1 }) => getSearchList(pageParam), {
    getNextPageParam: (lastPage) => {
      if (lastPage.results.length === 0) {
        return undefined;
      } else {
        return lastPage.page + 1;
      }
    },
  });
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Spinner />;

  return (
    <div>
      <div className="mt-8">
        <p className="text-2xl text-mCream ml-10">"{keyword}" 검색결과</p>
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
  );
};

export default SearchResult;
