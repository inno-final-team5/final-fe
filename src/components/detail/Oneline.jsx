import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { api } from "shared/api";
import { useMutation, useQueryClient } from "react-query";

function Oneline({ reviewId, oneLineReviewStar, oneLineReviewContent, nickname, likeNum }) {
  const starRating = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(<FaStar size={24} className="text-yellow-400" />);
      } else {
        star.push(<FaStar size={24} />);
      }
    }
    return star;
  };

  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  const headers = {
    Authorization: accessToken,
    "refresh-token": refreshToken,
  };

  const addCommentlike = async (data) => {
    return await api.post(`/auth/movie/${reviewId}/like`, data, {
      headers: headers,
    });
  };
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(addCommentlike, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  //onelinereview에 좋아요 데이터 get해와서 있으면 꽉찬떰즈 없으면 빈떰즈 한 후에 꽉찬 떰즈는 -1 빈떰즈는 +1하고 포스트로 보내기
  return (
    <div>
      <div className="container mt-2 bg-gray-500 h-20 rounded-3xl px-4 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <div className="flex ml-4 md:w-20">
            <span className="text-md text-mCream ">{nickname}</span>
          </div>
        </a>
        <div>
          <span className="flex ml-8">
            <Stars>{starRating(oneLineReviewStar)}</Stars>
          </span>
        </div>
        <span className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <h2 className="text-lg font-medium text-gray-300 title-font mb-1 mt-2">{oneLineReviewContent}</h2>
        </span>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <span className="text-mYellow hover:text-mCream items-center">
            <button
              onClick={() => {
                mutate();
              }}
            >
              <FaRegThumbsUp size={30} />
              <p className="mt-2 text-xl hover:text-mCream">{likeNum}</p>
            </button>
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
