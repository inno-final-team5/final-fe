import React from "react";
import poster from "../../images/poster.png";

const SearchList = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-center pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-22 md:flex-row flex-col">
        <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 p-14">
          <div class="relative cursor-pointer">
            <a
              href="#!"
              class="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-80 bg-gray-800 duration-300"
            >
              <h1 className="text-2xl text-mCream font-semibold">해리포터</h1>
            </a>
            <div class="relative flex flex-wrap content-center">
              <img alt="영화포스터" src={poster} />
            </div>
          </div>
          <div class="relative cursor-pointer">
            <a
              href="#!"
              class="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-80 bg-gray-800 duration-300"
            >
              <h1 className="text-2xl text-mCream font-semibold">해리포터</h1>
            </a>
            <div class="relative flex flex-wrap content-center">
              <img alt="영화포스터" src={poster} />
            </div>
          </div>
          <div class="relative cursor-pointer">
            <a
              href="#!"
              class="absolute inset-0 z-10 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-80 bg-gray-800 duration-300"
            >
              <h1 className="text-2xl text-mCream font-semibold">해리포터</h1>
            </a>
            <div class="relative flex flex-wrap content-center">
              <img alt="영화포스터" src={poster} />
            </div>
          </div>
          <img alt="영화포스터" src={poster} />
          <img alt="영화포스터" src={poster} />
          <img alt="영화포스터" src={poster} />
          <img alt="영화포스터" src={poster} />
          <img alt="영화포스터" src={poster} />
          <img alt="영화포스터" src={poster} />
        </section>
      </div>
    </div>
  );
};

export default SearchList;
