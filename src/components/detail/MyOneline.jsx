import React, { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { api } from "shared/api";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { useParams } from "react-router-dom";

const MyOneline = ({ res }) => {
  //console.log(res[0],"내가 작성한 한줄평");
  const params = useParams();
  const myOneline = useRef("");
  const id = res[0].oneLineReviewId;

  const title = params.title;
  const poster = params.poster;
  const poster_path = "/" + poster + ".jpg";

  const [isEditMode, setIsEditMode] = useState(false);

  const starRating = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(<FaStar size={24} className="text-yellow-400" />);
      } else {
        star.push(<FaStar size={24} className="text-gray-600" />);
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

  const queryClient = useQueryClient();

  /**한줄평 삭제 */
  const deleteMyline = async () => {
    return await api.delete(`/auth/movie/${id}`, {
      headers: headers,
    });
  };

  const { mutate, isLoading } = useMutation(deleteMyline, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
      console.log(data, "삭제데이터");
    },
    onError: (error) => {
      console.log(error, "에러");
    },
  });

  /**한줄평 수정 */
  const editMyline = async (data) => {
    return await api.put(`/auth/movie/${id}`, data, {
      headers: headers,
    });
  };

  const editBtnHandler = useMutation(editMyline, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
      setIsEditMode(false);
    },
    onError: (error) => {
      console.log(error, "에러");
    },
  }).mutate;

  return (
    <div>
      {!isEditMode ? (
        <>
          <section className="mt-6">
            <div className="container pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <div className="flex title-font font-medium items-center mr-4 mb-4 md:mb-0">
                <h1 className="p-2 md:text-xl font-medium title-font md:flex-row flex-col text-mYellow">내가쓴한줄평</h1>
              </div>
              <div className="flex md:w-1/2 2xl:w-full xl:w-full md:w-full space-x-2">
                <Stars className="mt-2 ml-5">{starRating(res[0].oneLineReviewStar)}</Stars>
                <div className="2xl:w-full md:w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap text-base ">
                  <input className="pl-2 pt-2 text-xl w-full h-10 bg-gray-400 rounded-xl" value={res[0].oneLineReviewContent} disabled />
                </div>
                <div className="flex-shrink-0 gap-4 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
                  <button
                    className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream"
                    onClick={() => {
                      setIsEditMode(true);
                    }}
                  >
                    <TiPencil size="20" />
                  </button>
                  <button className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
                    <BsTrash
                      onClick={() => {
                        mutate();
                      }}
                      size="20"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mt-6">
            <div className="container pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <div className="flex title-font font-medium items-center mr-4 mb-4 md:mb-0">
                <h1 className="p-2 md:text-xl font-medium title-font md:flex-row flex-col text-mYellow">내가쓴한줄평</h1>
              </div>
              <div className="flex md:w-1/2 2xl:w-full xl:w-full md:w-full space-x-2">
                <Stars className="mt-2 ml-5">{starRating(res[0].oneLineReviewStar)}</Stars>
                <div className="2xl:w-full md:w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap text-base ">
                  <input className="pl-2 pt-2 text-xl w-full h-10 rounded-xl" autoFocus defaultValue={res[0].oneLineReviewContent} ref={myOneline} />
                </div>
                <div className="flex-shrink-0 gap-4 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
                  <button
                    className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream "
                    onClick={() => {
                      setIsEditMode(false);
                    }}
                  >
                    뒤로
                  </button>
                  <button className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
                    <TiPencil
                      size="20"
                      onClick={() => {
                        const data = {
                          movieId: res[0].movieId,
                          oneLineReviewContent: myOneline.current.value,
                          oneLineReviewStar: res[0].oneLineReviewStar,
                          posterPath: poster_path,
                          title: title,
                        };
                        editBtnHandler(data);
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default MyOneline;

const Stars = styled.div`
  display: flex;
  .yellowStar {
    color: #fcc419;
  }
`;
