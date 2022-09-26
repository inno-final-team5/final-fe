import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Oneline({ movieId, oneLineReview, title }) {
  //onelinereview에 좋아요 데이터 get해와서 있으면 꽉찬떰즈 없으면 빈떰즈 한 후에 꽉찬 떰즈는 -1 빈떰즈는 +1하고 포스트로 보내기
  return (
    <div>
      <div class="container mt-2 bg-gray-500 h-20 rounded-3xl px-4 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <div className="flex w-40 ml-5">
            <span class="text-sm text-mCream ">{oneLineReview.nickname}</span>
          </div>
        </a>
        <div>
          <span className="flex ml-8">
            <FaStar size="20" className="text-yellow-300" />
            <FaStar size="20" className="text-yellow-300" />
            <FaStar size="20" className="text-yellow-300" />
            <FaStar size="20" />
            <FaStar size="20" />
          </span>
        </div>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <h2 class="text-lg font-medium text-gray-300 title-font mb-1">{oneLineReview.content}</h2>
        </p>

        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <p class="text-mYellow items-center">
            <FaRegThumbsUp size={30} />
            <p className="mt-2">{oneLineReview.oneLineReviewLikeCount}</p>
          </p>
        </span>
      </div>
    </div>
  );
}

export default Oneline;
