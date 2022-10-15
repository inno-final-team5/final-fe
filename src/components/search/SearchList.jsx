import React, { useEffect } from "react";
import Spinner from "components/common/Spinner";
import SearchMovie from "./SearchMovie";
import { getSearchList } from "apis/movieApi";

// 무한스크롤
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

const SearchList = () => {
  const { ref, inView } = useInView();

  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "searchList",
    ({ pageParam = 1 }) => getSearchList(pageParam),
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
    <div className="mt-0">
      <div className="items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto px-2 py-22 md:flex-row flex-col">
        <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((movie) => (
                <SearchMovie {...movie} key={movie.movieId} />
              ))}
            </React.Fragment>
          ))}
        </section>
      </div>
      {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
    </div>
  );
};

export default SearchList;
