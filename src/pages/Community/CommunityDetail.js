import React from "react";
import tw from "tailwind-styled-components";
import { FaThumbsUp, FaEdit, FaTrash } from "react-icons/fa";
import { useQuery } from "react-query";
import { getPostDetail } from "apis/postApi";
import { useParams } from "react-router-dom";
import Profile from "components/common/Profile";

const CommunityDetail = () => {
  const { id } = useParams();

  const nickname = localStorage.getItem("nickname");

  const {
    isLoading,
    isError,
    error,
    data: post,
  } = useQuery(["post", id], () => getPostDetail(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log(post.data);

  let postData = post.data;

  return (
    <div className="bg-mGray p-4 text-mBlack rounded-lg">
      <div className=" px-4 pt-2 flex gap-4 flex-col h-full ">
        <div className="flex items-center justify-end p-2 text-xs text-mWhite">
          <Profile />
          <p> {postData.nickname}</p>
        </div>
        <h2 className="text-2xl truncate w-full border-b-2 border-solid text-mBlack border-mGray  bg-mWhite rounded-xl p-4">
          {postData.postTitle}
        </h2>
        <div className="p-7 min-h-[300px] bg-mWhite rounded-xl">
          <p>{postData.postContent}</p>
        </div>

        <div className=" flex gap-3 justify-center items-center text-mCream  text-2xl mt-4">
          <button>
            <FaThumbsUp />
          </button>
          <p className="text-mYellow"> {postData.likeNum}</p>
        </div>
        {postData.nickname === nickname ? (
          <div className=" flex justify-end gap-4 text-mWhite">
            <button>
              <FaTrash />
            </button>
            <button>
              <FaEdit />
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};


export default CommunityDetail;
