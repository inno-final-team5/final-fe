import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

function OnelineList() {
  return (
    <div className="mt-6 pb-6 ">
      <div className=" pr-10 pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-2 py-24 md:flex-row flex-col items-center">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-1 py-10 mx-auto ">
            <div class="-my-6 divide-y-2 divide-gray-100 ">
              <div class="py-6 flex flex-wrap md:flex-nowrap">
                <div class="px-20 md:w-60 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="text-lg text-mCream">댓글작성자</span>
                </div>
                <div class="md:flex-grow flex">
                  <h2 class="text-lg font-medium text-gray-300 title-font mb-1">
                    한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
                    한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
                  </h2>
                  <p class="text-mYellow items-center mt-2">
                    <FaRegThumbsUp size={30} />
                    <p className="mt-2">100</p>
                  </p>
                </div>
              </div>
              <div class="py-6 flex flex-wrap md:flex-nowrap">
                <div class="px-20 md:w-60 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="text-lg text-mCream">댓글작성자</span>
                </div>
                <div class="md:flex-grow flex ">
                  <h2 class="text-lg font-medium text-gray-300 title-font mb-1">
                    한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
                    한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
                  </h2>
                  <p class="text-mYellow items-center mt-2">
                    <FaThumbsUp size={30} />
                    <p className="mt-2">100</p>
                  </p>
                </div>
              </div>
              <div class="py-6 flex flex-wrap md:flex-nowrap">
                <div class="md:w-60 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span class="px-20 text-lg text-mCream">댓글작성자</span>
                </div>
                <div class="md:flex-grow flex">
                  <h2 class="text-lg font-medium text-gray-300 title-font mb-1">
                    한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
                    한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
                  </h2>
                  <p class="text-mYellow items-center mt-2">
                    <FaThumbsUp size={30} />
                    <p className="mt-2">100</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OnelineList;
