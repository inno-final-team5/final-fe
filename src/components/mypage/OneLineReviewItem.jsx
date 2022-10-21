import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MyStars = ({ star }) => {
  let stars = [];

  for (let i = 0; i < star; i++) {
    stars.push(<FaStar />);
  }

  return stars;
};

const OneLineReviewItem = ({ oneLineReview }) => {
  return (
    <Link
      to={`/${oneLineReview.movieId}/${oneLineReview.title}${
        oneLineReview.posterPath.split(".")[0]
      }`}
    >
      <div
        key={oneLineReview.oneLineReviewId}
        className="flex bg-mGray gap-2 w-full rounded-xl my-6 flex-col md:flex-row p-2"
      >
        <div className="w-full text-left items-center text-mWhite text-sm py-2 md:basis-4/12">
          <h2>{oneLineReview.title}</h2>
        </div>
        <div className="flex text-mYellow items-center md:basis-1/12">
          <MyStars
            key={oneLineReview.title}
            star={oneLineReview.oneLineReviewStar}
          />
        </div>
        <div className="w-full truncate text-mWhite text-sm py-2 md:basis-7/12">
          <span>{oneLineReview.oneLineReviewContent}</span>
        </div>
      </div>
    </Link>
  );
};

export default OneLineReviewItem;
