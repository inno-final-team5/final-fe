import React from "react";
import { useQuery } from "react-query";
import Spinner from "components/common/Spinner";
import { getRecentPosteWithApi } from "apis/mainApi";
import { useNavigate } from "react-router-dom";
import BadgeEmoji from "../../common/BadgeEmoji";

const NewPosts = () => {
  const navigate = useNavigate();

  /**데이터가 onSuccess일때 가져오기*/
  const Recentquery = useQuery("post", getRecentPosteWithApi, {
    onSuccess: () => {},
  });
  if (Recentquery.isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <ul>
        {Recentquery.data.data.map((i) => (
          <li
            key={i.postId}
            onClick={() => {
              navigate(`/community/${i.postId}`);
              window.scrollTo(0, 0);
            }}
            className="bg-mWhite flx-col md:flex  md:flex-nowrap px-5 py-3 rounded-lg mb-5 last:mb-0 cursor-pointer hover:bg-neutral-300 "
          >
            {/* 게시글 카테고리 이름 */}
            <div className="flex justify-center w-16 text-sm bg-mGray py-1 mr-10 rounded-lg text-mCream ">{i.postCategory}</div>
            {/* 뱃지와 닉네임 */}
            <div className="mr-4 my-2 md:my-0 pt-1">
              <div className="flex align-center">
                <BadgeEmoji badgeId={i.badgeId} />
                <div className="w-fit md:w-40 flex text-sm ml-1 text-mGray">{i.nickname}</div>
              </div>
            </div>

            {/* 게시글 제목 */}
            <div className=" truncate leading-normal grow">{i.postTitle}</div>

            {/* 게시글 작성일 */}
            <div className="flex justify-end text-sm md:w-24 mt-1 w-full">
              {/* 작성일+시간중에 작성일만 표시하기 */}
              {i.createdAt.split("T")[0]}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewPosts;
