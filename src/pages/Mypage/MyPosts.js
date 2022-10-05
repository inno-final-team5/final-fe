import { getMyPosts } from "apis/postApi";
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
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
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
              className="flex bg-mWhite gap-12 p-2 mx-2 my-4 py-3 rounded-xl justify-between text-mGray"
            >
              <div className="pl-4">
                <p className="w-16">{post.postCategory}</p>
              </div>
              <div className="w-full">{post.postTitle}</div>

              <div>
                <p className="w-28">
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
