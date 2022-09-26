import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Oneline({ props }) {
  console.log(props, "프롭스");
  return (
    <div>
      <div class="container px-1 py-10 mx-auto ">
        <div class="-my-6 divide-y-2 divide-gray-100 ">
          <div class="py-6 flex flex-wrap md:flex-nowrap">
            <div class="px-20 md:w-60 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="text-sm text-mCream ">
                댓글작성자
                <span className="flex">
                  <FaStar size="40" className="text-yellow-300" />
                  <FaStar size="40" className="text-yellow-300" />
                  <FaStar size="40" className="text-yellow-300" />
                  <FaStar size="40" />
                  <FaStar size="40" />
                </span>
              </span>
            </div>
            <div></div>
            <div class="md:flex-grow flex">
              <h2 class="text-lg font-medium text-gray-300 title-font mb-1">
                한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평
                내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
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
                한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평
                내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
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
                한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평
                내용입니다 한줄평 내용입니다 한줄평 내용입니다 한줄평 내용입니다
              </h2>
              <p class="text-mYellow items-center mt-2">
                <FaThumbsUp size={30} />
                <p className="mt-2">100</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oneline;
