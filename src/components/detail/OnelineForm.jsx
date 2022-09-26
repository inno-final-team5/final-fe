import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "react-query";

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

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:id
    //     star: score,
    //   }),
    // });
  };

  return (
    <div>
      <section className="mt-6">
        <div className="container pl-2 pt-2 pb-2 rounded-3xl bg-mGray mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center ml-2 mr-2 mb-4 md:mb-0">
            <h1 className="md:text-xl font-medium title-font md:flex-row flex-col text-mYellow">한줄평작성하기</h1>
          </div>
          <Stars>
            {array.map((el, idx) => {
              return <FaStar key={idx} size="30" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
            })}
          </Stars>
          <div className="flex md:w-3/4 w-3/4 2xl:w-3/4 xl:w-2/3 lg:w-1/2 md:w-2/3 space-x-6">
            <div className="2xl:w-full md:w-full xl:w-full lg:w-full md:mr-auto md:ml-2 md:py-2 md:pl-8 md:border-l md:border-gray-400	flex flex-wrap text-base ">
              <input className="leading-10 w-full rounded-xl" />
            </div>
            <div className="flex-shrink-0 inline-flex items-center focus:outline-none text-base xl:mr-6 md:mt-0">
              <button className="2xl:px-6 xl:px-10 lg:px-6 md:px-10 bg-mYellow inline-flex py-3 rounded-full items-center hover:bg-mCream ">
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
            <Stars className="mt-7 ml-3">
              {array.map((el, idx) => {
                return <FaStar key={idx} size="30" onClick={() => handleStarClick(el)} className={clicked[el] && "yellowStar"} />;
              })}
            </Stars>
            <div className="2xl:w-full md:w-full md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap text-base ">
              <textarea className="leading-10 w-full bg-gray-400 rounded-xl" />
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
