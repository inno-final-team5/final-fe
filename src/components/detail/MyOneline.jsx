import React, { useState, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { api } from "shared/api";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Spinner from "components/common/Spinner";

const MyOneline = ({ res }) => {
  //console.log(res[0],"내가 작성한 한줄평");
  const params = useParams();
  const myOneline = useRef("");
  const id = res[0].oneLineReviewId;
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: accessToken,
    "refresh-token": refreshToken,
  };
  const title = params.title;
  const poster = params.poster;
  const poster_path = "/" + poster + ".jpg";
  const [isEditMode, setIsEditMode] = useState(false);

  /* 별점 추가 */
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  let score = clicked.filter(Boolean).length;

  /**별점 설정 */
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

  /**한줄평 삭제 */
  const deleteMyline = async () => {
    return await api.delete(`/auth/movie/${id}`, {
      headers: headers,
    });
  };
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteMyline, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
      alert("삭제되었습니다.");
    },
    onError: (error) => {
      console.log(error, "에러");
    },
  });

  /**한줄평 수정 */
  const editMyline = async (data) => {
    if (data.oneLineReviewContent == 0) {
      alert("한줄평을 입력해주세요");
      return;
    } else if (data.oneLineReviewStar == 0) {
      alert("별점을 입력해주세요");
      return;
    } else {
      return await api.put(`/auth/movie/${id}`, data, {
        headers: headers,
      });
    }
  };
  const editBtnHandler = useMutation(editMyline, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
      alert("한줄평이 수정되었습니다.");
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
                <MyStars className="mt-2 ml-5">{starRating(res[0].oneLineReviewStar)}</MyStars>
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
                    <TiPencil size="22" />
                  </button>
                  <button className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
                    <BsTrash
                      onClick={() => {
                        mutate();
                      }}
                      size="22"
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
                <Stars className="mt-2 ml-5">
                  {array.map((el, idx) => {
                    return <FaStar key={idx} size="24" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
                  })}
                </Stars>
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
                    <IoMdArrowBack size="22" />
                  </button>
                  <button className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
                    <TiPencil
                      size="22"
                      onClick={() => {
                        const data = {
                          movieId: res[0].movieId,
                          oneLineReviewContent: myOneline.current.value,
                          oneLineReviewStar: score,
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
  & svg {
    color: gray;
    cursor: pointer;
  }
  :hover svg {
    color: #fcc419;
  }
  & svg:hover ~ svg {
    color: gray;
  }
`;

const MyStars = styled.div`
  display: flex;
  .yellowStar {
    color: #fcc419;
  }
`;
