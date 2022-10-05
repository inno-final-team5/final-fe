import React, { useState, useRef, useEffect } from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import axios from "axios";
import { api } from "shared/api";
import { useParams } from "react-router-dom";

const OnelineForm = () => {
  const getMovieSum = () => {
    return api.get(`/movie/detail/${id}`);
  };
  const [img, setImg] = useState(null);
  const [movieInfo, setMovieInfo] = useState(null);
  const params = useParams();
  const id = params.id;

  const nickname = localStorage.getItem("nickname");
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, setEditComment] = useState("");

  const movieQuery = useQuery("movieList", getMovieSum, {
    onSuccess: (data) => {
      setImg(`https://image.tmdb.org/t/p/w342` + data.data.data.poster_path);
      setMovieInfo(data.data.data);
    },
  });
  // console.log(movieInfo, "무비인포!!!");
  const title = params.title;
  const poster = params.poster_path;
  // console.log(title, "타이틀");
  // console.log(poster, "포스터");

  let movieId = 2;
  let score = clicked.filter(Boolean).length;

  const myOneline = useRef("");

  const addOneline = (data) => {
    return axios.post(`http://localhost:3001/onelineList`, data);
  };

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(addOneline, {
    onSuccess: () => {
      //내 댓글을 리스트에 추가해주면 ok
      queryClient.invalidateQueries("onelineList");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const getOnelineList = () => {
    return axios.get("http://localhost:3001/onelineList");
  };

  const onelineQuery = useQuery("onelineList", getOnelineList, {
    onSuccess: (data) => {},
  });

  return (
    <div>
      {accessToken != null ? (
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
              <div className="2xl:w-full md:w-full xl:w-full lg:w-full sm:mt-2 sm:w-5/6 md:mr-auto md:ml-2 md:py-2 md:pl-8 md:border-l md:border-gray-400 flex flex-wrap text-base ">
                <input ref={myOneline} className="leading-10 w-full rounded-xl sm:mt-2" />
              </div>
              <div className="flex-shrink-0 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
                <button
                  id="movieList"
                  onClick={() => {
                    const data = {
                      movieId: movieId,
                      title: title,
                      oneLineReview: {
                        oneLineReviewId: 5,
                        nickname: "닉네임입니다",
                        star: score,
                        oneLineReviewLikeCount: 0,
                        content: myOneline.current.value,
                      },
                    };
                    mutate(data);
                  }}
                  className="2xl:px-6 xl:px-10 md:mt-2 sm:mt-4 lg:px-6 sm:px-10 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream "
                >
                  작성하기
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}
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
