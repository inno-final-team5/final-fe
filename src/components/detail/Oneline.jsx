import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

function Oneline({ movieId, oneLineReview, title }) {
  const [star, setClicked] = useState([false, false, false, false, false]);
  let value = oneLineReview.star;
  const array = [0, 1, 2, 3, 4];
  const handleStar = (value) => {
    setClicked(value);
  };
  // for (var i = 0; i < 5; i++) {
  //   if (i < value) {
  //     return "별";
  //   } else {
  //     return "검정별";
  //   }
  // }

  // const [cardContent, setCardContent] = useState({});
  // const [isEditMode, setIsEditMode] = useState(false);

  //onelinereview에 좋아요 데이터 get해와서 있으면 꽉찬떰즈 없으면 빈떰즈 한 후에 꽉찬 떰즈는 -1 빈떰즈는 +1하고 포스트로 보내기
  return (
    <div>
      <div className="container mt-2 bg-gray-500 h-20 rounded-3xl px-4 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <div className="flex w-40 ml-5">
            <span className="text-sm text-mCream ">{oneLineReview.nickname}</span>
          </div>
        </a>
        <div>
          <span className="flex ml-8">
            <Stars>
              {array.map((el, idx) => {
                return <FaStar key={idx} size="20" onChange={() => handleStar(el)} className={star[el] && "yellowStar"} />;
              })}
            </Stars>
          </span>
        </div>
        <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <h2 className="text-lg font-medium text-gray-300 title-font mb-1">{oneLineReview.content}</h2>
        </span>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <span className="text-mYellow items-center">
            <FaRegThumbsUp size={30} />
            <p className="mt-2">{oneLineReview.oneLineReviewLikeCount}</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Oneline;

const Stars = styled.div`
  display: flex;
  .yellowStar {
    color: #fcc419;
  }
`;
