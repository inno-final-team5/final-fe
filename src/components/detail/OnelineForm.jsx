import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import axios from "axios";

const OnelineForm = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  let movieId = 2;
  const title = "해리포터";
  const nickname = localStorage.getItem("nickname");
  let score = clicked.filter(Boolean).length;

  const myOneline = useRef("");

  const addOneline = (data) => {
    return axios.post(`http://localhost:3001/onelineList`, data);
  };

  const queryClient = useQueryClient();

  console.log(useMutation(addOneline), "뮤테이션");

  const { mutate, isLoading } = useMutation(addOneline, {
    onSuccess: () => {
      //내 댓글을 리스트에 추가해주면 ok
      queryClient.invalidateQueries("onelineList");
    },
    onError: (error, variable, context) => {
      console.log(error);
    },
  });

  const getOnelineList = () => {
    return axios.get("http://localhost:3001/onelineList");
  };

  const onelineQuery = useQuery("onelineList", getOnelineList, {
    onSuccess: (data) => {},
  });

  //임의로 설정해둔 무비아이디 나중에 params로 교체할예정

  // useEffect(() => {
  //   sendReview();
  // }, [clicked]);

  // const sendReview = () => {
  //   let score = clicked.filter(Boolean).length;
  //   // fetch('http://52.78.63.175:8000/movie', {
  //   //   method: 'POST',
  //   //   Headers: {
  //   //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
  //   //   },
  //   //   body: JSON.stringify({
  //   //     movie_id:id
  //   //     star: score,
  //   //   }),
  //   // });
  // };

  return (
    <div>
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
          <div className="flex md:w-3/4 w-3/4 2xl:w-3/4 xl:w-full lg:w-full md:w-full sm:w-full space-x-4">
            <div className="2xl:w-full md:w-full xl:w-full lg:w-full sm:w-full md:mr-auto md:ml-2 md:py-2 md:pl-8 md:border-l md:border-gray-400 flex flex-wrap text-base ">
              <input ref={myOneline} className="leading-10 w-full rounded-xl sm:mt-4" />
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
                className="2xl:px-6 xl:px-10 sm:mt-4 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream "
              >
                작성하기
              </button>
            </div>
          </div>
        </div>
      </section>
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
