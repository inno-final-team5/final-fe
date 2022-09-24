import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

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
  }, [clicked]); //컨디마 컨디업

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
      <section className="">
        <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
          <div className="flex items-center md:pr-10 md:mb-0 mb-4 pr-2 w-full md:w-auto md:text-center ">
            <h1 className="md:text-xl font-medium title-font md:flex-row flex-col text-mYellow">한줄평작성하기</h1>
          </div>
          <Stars>
            {array.map((el, idx) => {
              return <FaStar key={idx} size="30" onClick={() => handleStarClick(el)} className={clicked[el] && 'yellowStar'} />;
            })}
          </Stars>
          <div className="p-6 flex">
            <input className="leading-10" />
          </div>
          <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
            <button className="bg-gray-100 inline-flex py-3 px-4 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
              <span className="ml-2 flex items-start flex-col leading-none ">
                <span className="title-font font-medium ">작성하기</span>
              </span>
            </button>
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
