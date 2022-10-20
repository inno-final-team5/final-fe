import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const userline = ({ title, posterPath, oneLineReviewContent, oneLineReviewStar, movieId }) => {
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

  return (
    <div>
      <Link to={`/${movieId}/${title}${posterPath.split(".")[0]}`}>
        <div className="container 2xl:px-10 mt-2 bg-gray-500 lg:h-8 md:h-24 rounded-2xl px-6 py-0 lg:py-7 sm:py-2 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex flex-col lg:flex-row mt-3 lg:mt-0">
            <a className="flex title-font items-center md:justify-start justify-center text-gray-900">
              <div className="flex ml-3 lg:w-60 md:w-32 sm:w-20 ">
                <h2 className="text-base 2xl:text-sm lg:text-sm md:text-sm sm:text-sm font-bold text-gray-300 title-font sm:mr-2 ">{title}</h2>
              </div>
            </a>
            <div>
              <span className="flex mt-2 lg:mt-0 items-center justify-center text-gray-600">
                <Stars>{starRating(oneLineReviewStar)}</Stars>
              </span>
            </div>
          </div>
          <span className="text-gray-500 md:ml-2 sm:ml-2 sm:mt-0 mt-4 lg:ml-4 lg:mt-0">
            <h2 className="text-base 2xl:text-base lg:text-sm md:text-sm sm:text-sm font-medium text-gray-300 title-font mb-1 mt-2 sm:mr-2 ">
              {oneLineReviewContent}
            </h2>
          </span>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start"></span>
        </div>
      </Link>
    </div>
  );
};

export default userline;

const Stars = styled.div`
  display: flex;
  .yellowStar {
    color: #fcc419;
  }
`;
