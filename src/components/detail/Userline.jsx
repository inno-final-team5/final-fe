import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const userline = ({ title, posterPath, oneLineReviewContent, oneLineReviewStar, movieId }) => {
  const starRating = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(<FaStar size={18} className="text-yellow-400" />);
      } else {
        star.push(<FaStar size={18} />);
      }
    }
    return star;
  };

  return (
    <div>
      <Link to={`/${movieId}/${title}${posterPath.split(".")[0]}`}>
        <div className="hover:font-bold hover:bg-gray-600 container 2xl:px-10 mt-2 bg-gray-500 lg:h-8 md:h-24 rounded-2xl px-4 py-0 lg:py-7 sm:py-2 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex flex-col lg:flex-row mt-3 lg:mt-0 items-center md:justify-start justify-center text-gray-900">
            <div className="flex ml-3 lg:w-64 md:w-40 sm:w-32">
              <h2 className="text-sm md:ml-2 2xl:text-sm lg:text-sm md:text-sm sm:text-sm hover:font-bold text-mCream sm:mr-2 ">{title}</h2>
            </div>
            <div className="flex mt-2 lg:mt-0 items-center justify-center text-gray-600">
              <Stars>{starRating(oneLineReviewStar)}</Stars>
            </div>
          </div>
          <span className="text-gray-500 md:ml-2 sm:ml-2 sm:mt-2 mt-2 mb-2 lg:ml-4 lg:mt-2 text-base 2xl:text-base lg:text-sm md:text-sm sm:text-sm font-medium text-gray-300 title-font mb-1 sm:mr-2">
            <h2>{oneLineReviewContent}</h2>
          </span>
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
