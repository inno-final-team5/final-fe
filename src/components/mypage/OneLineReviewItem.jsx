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
      to={`/detail/${oneLineReview.movieId}/${oneLineReview.title}${
        oneLineReview.posterPath.split(".")[0]
      }`}
      className="hover:text-mBlack "
    >
      <div
        key={oneLineReview.oneLineReviewId}
        className="flex bg-mGray m-2 px-2 py-3 gap-12 w-full rounded-xl my-6"
      >
        <div className="flex text-mYellow w-[10%] pl-4 gap-1">
          <MyStars
            key={oneLineReview.title}
            star={oneLineReview.oneLineReviewStar}
          />
        </div>
        <div className="w-[28%] text-left text-mWhite">
          <h2 className="truncate">{oneLineReview.title}</h2>
        </div>
        <div className="w-[62%] text-mWhite truncate">
          <p>{oneLineReview.oneLineReviewContent}</p>
        </div>
      </div>
    </Link>
  );
};

export default OneLineReviewItem;
