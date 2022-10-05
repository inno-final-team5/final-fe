import { getMyComments } from "apis/commentApi";
import Spinner from "components/common/Spinner";
import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const MyStars = ({ star }) => {
  let stars = [];

  for (let i = 0; i < star; i++) {
    stars.push(<FaStar />);
  }

  return stars;
};

const MyComments = () => {
  const {
    isLoading,
    isError,
    error,
    data: myComments,
  } = useQuery("myComments", getMyComments);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <Fragment>
      <section>
        <div>
          {myComments.data.map((comment) => (
            <Link
              to={`/detail/${comment.movieId}/${comment.title}${
                comment.posterPath.split(".")[0]
              }`}
              className="hover:text-mBlack "
            >
              <div
                key={comment.oneLineReviewId}
                className="flex bg-mGray m-2 px-2 py-3 gap-12 w-full rounded-xl my-6"
              >
                <div className="flex text-mYellow w-[10%] pl-4 gap-1">
                  <MyStars star={comment.oneLineReviewStar} />
                </div>
                <div className="w-[28%] text-left text-mWhite">
                  <h2 className="truncate">{comment.title}</h2>
                </div>
                <div className="w-[62%] text-mWhite truncate">
                  <p>{comment.oneLineReviewContent}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default MyComments;
