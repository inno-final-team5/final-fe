import { getMyPosts } from "apis/postApi";
import Spinner from "components/common/Spinner";
import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const MyPosts = () => {
  const {
    isLoading,
    isError,
    error,
    data: myPosts,
  } = useQuery("myPosts", getMyPosts);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <Fragment>
      <section>
        {myPosts.data.map((post) => (
          <Link
            to={`/community/detail/${post.postId}`}
            className="hover:text-mBlack hover:font-bold"
          >
            <div
              key={post.postId}
              className="flex bg-mGray gap-12 px-2 my-6 py-3 rounded-xl justify-between text-mGray items-center"
            >
              <div className="pl-4 flex justify-center items-center">
                <p className="w-16 text-mWhite bg-mBlack rounded-lg p-2 text-center">
                  {post.postCategory}
                </p>
              </div>
              <div className="w-full truncate text-mWhite">
                {post.postTitle}
              </div>

              <div>
                <p className="w-28 text-mWhite">
                  {new Date(post.createdAt).toLocaleDateString("ko-KR")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </Fragment>
  );
};

export default MyPosts;
