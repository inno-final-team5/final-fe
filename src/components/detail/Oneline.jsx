import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { api } from "shared/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

function Oneline({ reviewId, oneLineReviewStar, oneLineReviewContent, nickname, likeNum }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: accessToken,
    "refresh-token": refreshToken,
  };
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

  /**내가 좋아요한 댓글 불러오기 */
  // const likeReviewId = reviewId;
  // const [myLike, setMyLike] = useState([]);
  // const getMyLikeComment = async () => {
  //   return await api.get(`/auth/movie/like`, {
  //     headers: headers,
  //   });
  // };
  // const myLikeCommnetQuery = useQuery("myLikeCommentList", getMyLikeComment, {
  //   onSuccess: (data) => {
  //     setMyLike(data.data.data);
  //   },
  // });
  // //좋아요 상태유지 위해 내가 좋아요한 댓글과 현재 댓글들과 일치하는 데이터 찾기
  // console.log(likeReviewId);
  // console.log(myLike, "마이라이크");
  // let res = myLike.filter((ele) => ele.oneLineReviewId == likeReviewId);
  // console.log(res, "내가 좋아요 누른 댓과 일치하는 데이터");

  /**한줄평 좋아요 추가 */
  const addCommentlike = async (data) => {
    return await api.post(`/auth/movie/${reviewId}/like`, data, {
      headers: headers,
    });
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation(addCommentlike, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myLikeCommentList");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  /**한줄평 좋아요 삭제 */
  // const deleteCommentlike = async (data) => {
  //   return await api.delete(`/auth/movie/${reviewId}/like`, data, {
  //     headers: headers,
  //   });
  // };
  // const deleteLike = useMutation(deleteCommentlike, {
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries("onelineList");
  //     queryClient.invalidateQueries("myLikeCommentList");
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   },
  // }).mutate;

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
            {/* {res?.length ? (
              <button
                onClick={() => {
                  deleteLike();
                }}
              >
                <FaThumbsUp size={30} />
                <p className="mt-2 text-xl hover:text-mCream">{likeNum}</p>
              </button>
            ) : (
              <button
                onClick={() => {
                  mutate();
                }}
              >
                <FaRegThumbsUp size={30} />
                <p className="mt-2 text-xl hover:text-mCream">{likeNum}</p>
              </button>
            )} */}

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
