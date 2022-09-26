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

  const myOneline = useRef("");

  const addOneline = (data) => {
    return axios.post("http://localhost:3001/onelineList", data);
  };

  const queryClient = useQueryClient();

  console.log(useMutation(addOneline), "뮤테이션");

  const { mutate } = useMutation(addOneline, {
    onSuccess: () => {
      //내 댓글을 리스트에 추가해주면 ok
      queryClient.invalidateQueries("onelineList");
    },
  });

  //임의로 설정해둔 무비아이디 나중에 params로 교체할예정
  const movieId = 1;
  const title = "해리포터";
  const nickname = localStorage.getItem("nickname");
  let score = clicked.filter(Boolean).length;
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
          <div className="flex md:w-3/4 w-3/4 2xl:w-3/4 xl:w-2/3 lg:w-1/2 md:w-2/3 space-x-6">
            <div className="2xl:w-full md:w-full xl:w-full lg:w-full md:mr-auto md:ml-2 md:py-2 md:pl-8 md:border-l md:border-gray-400 flex flex-wrap text-base ">
              <input ref={myOneline} className="leading-10 w-full rounded-xl" />
            </div>
            <div className="flex-shrink-0 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
              <button
                onClick={() => {
                  const data = {
                    movieId: movieId,
                    title: title,
                    oneLineReview: {
                      oneLineReviewId: 4,
                      nickname: "닉네임입니다",
                      star: score,
                      oneLineReviewLikeCount: 0,
                      content: myOneline.current.value,
                    },
                  };
                  mutate(data);
                }}
                className="2xl:px-6 xl:px-10 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream "
              >
                작성하기
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <div className="container pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center mr-4 mb-4 md:mb-0">
            <h1 className="p-2 md:text-xl font-medium title-font md:flex-row flex-col text-mYellow">내가쓴한줄평</h1>
          </div>
          <div className="flex md:w-1/2 2xl:w-full xl:w-full md:w-full space-x-2">
            <Stars className="mt-2 ml-3">
              {array.map((el, idx) => {
                return <FaStar key={idx} size="30" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
              })}
            </Stars>
            <div className="2xl:w-full md:w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap text-base ">
              <textarea className="text-2xl w-full h-10 bg-gray-400 rounded-xl" />
            </div>
            <div className="flex-shrink-0 gap-4 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
              <button className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
                <TiPencil size="20" />
              </button>
              <button className="2xl:px-6 xl:px-6 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
                <BsTrash size="20" />
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
