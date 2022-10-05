import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import axios from "axios";
import { api } from "shared/api";
import { useParams } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import MyOneline from "./MyOneline";

const OnelineForm = () => {
  const params = useParams();
  const id = params.id;
  const [allmyline, setAllmyline] = useState([]);
  const nickname = localStorage.getItem("nickname");
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const headers = {
    Authorization: accessToken,
    "refresh-token": refreshToken,
  };

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  // const [isEdit, setIsEdit] = useState(false);
  // const [editComment, setEditComment] = useState("");

  const title = params.title;
  const poster = params.poster;
  const poster_path = "/" + poster + ".jpg";

  let score = clicked.filter(Boolean).length;

  const myOneline = useRef("");

  const addOneline = (data) => {
    console.log(data);
    return api.post(`/auth/movie/one-line-review`, data, {
      headers: headers,
    });
  };

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(addOneline, {
    onSuccess: (data) => {
      //내 댓글을 리스트에 추가해주면 ok
      queryClient.invalidateQueries("onelineList");
      queryClient.invalidateQueries("myOneline");
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const getMyOneline = async () => {
    return await api.get(`/auth/movie/one-line-review`, {
      headers: headers,
    });
  };

  const myMovieQuery = useQuery("myOneline", getMyOneline, {
    onSuccess: (data) => {
      setAllmyline(data.data.data);
    },
  });

  let res = allmyline.filter((ele) => ele.movieId == id);

  return (
    <div>
      {accessToken == null ? null : res?.length ? (
        <>
          <MyOneline res={res} />
        </>
      ) : (
        <>
          <section className="mt-6">
            <div className="container pl-3 pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap flex-col md:flex-row items-center">
              <div className="flex mr-6 title-font font-medium items-center ml-2 mr-2 mb-4 md:mb-0">
                <h1 className="md:text-xl font-medium title-font md:flex-row flex-col text-mYellow">한줄평작성하기</h1>
              </div>
              <Stars>
                {array.map((el, idx) => {
                  return <FaStar key={idx} size="30" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
                })}
              </Stars>
              <div className="flex w-3/4 2xl:w-3/4 xl:w-full lg:w-full md:w-full sm:items-center sm:flex-col md:flex-row sm:w-full  space-x-4">
                <div className="2xl:w-full md:w-full xl:w-full lg:w-full xl:mt-0 sm:mt-2 sm:w-5/6 md:mr-auto md:ml-2 md:py-2 md:pl-8 md:border-l md:border-gray-400 flex flex-wrap text-base ">
                  <input ref={myOneline} className="pl-2 leading-10 w-full rounded-xl sm:mt-2" />
                </div>
                <div className="flex-shrink-0 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
                  <button
                    onClick={() => {
                      const data = {
                        movieId: id,
                        title: title,
                        posterPath: poster_path,
                        oneLineReviewStar: score,
                        oneLineReviewContent: myOneline.current.value,
                      };
                      mutate(data);
                    }}
                    className="2xl:px-6 xl:px-10 md:mt-3 sm:mt-4 lg:px-6 sm:px-10 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream "
                  >
                    작성하기
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

export default OnelineForm;

const Stars = styled.div`
  display: flex;
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
  .yellowStar {
    color: #fcc419;
  }
`;
