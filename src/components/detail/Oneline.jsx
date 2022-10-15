import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "react-query";
import BadgeEmoji from "../common/BadgeEmoji";
import { Toast } from "components/common/Toast";
import { addCommentLike, deleteCommentLike, getMyLikeComment } from "apis/oneLineReviewApi";

function Oneline({ reviewId, oneLineReviewStar, oneLineReviewContent, nickname, likeNum, badgeId }) {
  const queryClient = useQueryClient();
  const accessToken = localStorage.getItem("accessToken");

  const starRating = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(<FaStar size={20} className="text-yellow-400" />);
      } else {
        star.push(<FaStar size={20} />);
      }
    }
    return star;
  };

  /**내가 좋아요한 댓글 불러오기 */
  const likeReviewId = reviewId;
  const [myLike, setMyLike] = useState([]);
  const myLikeCommnetQuery = useQuery("myLikeCommentList", getMyLikeComment, {
    onSuccess: (data) => {
      setMyLike(data.data.data);
    },
  });
  // //좋아요 상태유지 위해 내가 좋아요한 댓글과 현재 댓글들과 일치하는 데이터 찾기
  let res = myLike.filter((ele) => ele.oneLineReviewId == likeReviewId);

  const addLike = useMutation(() => addCommentLike(reviewId), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myLikeCommentList");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteLike = useMutation(() => deleteCommentLike(reviewId), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myLikeCommentList");
    },
    onError: (error) => {
      console.log(error);
    },
  }).mutate;

  return (
    <div>
      <div className="container mt-2 bg-gray-500 h-8 rounded-2xl px-6 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex md:flex-col sm:flex-col lg:flex-row">
          <a className="flex title-font items-center md:justify-start justify-center text-gray-900">
            <div className="sm:w-2">
              <BadgeEmoji badgeId={badgeId} />
            </div>
            <div className="flex ml-3 2xl:w-36 xl:w-36 md:w-20 sm:w-12">
              <span className="text-sm text-mCream sm:text-xs">{nickname}</span>
            </div>
          </a>
          <div>
            <span className="flex">
              <Stars>{starRating(oneLineReviewStar)}</Stars>
            </span>
          </div>
        </div>
        <span className="text-gray-500 md:ml-2 sm:ml-3 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <h2 className="text-base lg:text-base md:text-sm sm:text-sm font-medium text-gray-300 title-font mb-1 mt-2 sm:mr-2 ">
            {oneLineReviewContent}
          </h2>
        </span>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <span className="text-mYellow hover:text-mCream items-center">
            {accessToken == null ? (
              <button
                className="mt-1 lg:mr-4"
                onClick={() => {
                  Toast.fire({ icon: "warning", title: "로그인이 필요합니다" });
                }}
              >
                <FaRegThumbsUp size={18} />
                <p className="mt-1 text-sm hover:text-mCream lg:mr-4">{likeNum}</p>
              </button>
            ) : res?.length ? (
              <button
                className="mt-1 lg:mr-4"
                onClick={() => {
                  deleteLike();
                }}
              >
                <FaThumbsUp size={18} className="sm:text-sm" />
                <p className="mt-1 text-sm hover:text-mCream">{likeNum}</p>
              </button>
            ) : (
              <button
                className="mt-1 lg:mr-4"
                onClick={() => {
                  addLike.mutate();
                }}
              >
                <FaRegThumbsUp size={18} />
                <p className="mt-1 text-sm hover:text-mCream ">{likeNum}</p>
              </button>
            )}
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
