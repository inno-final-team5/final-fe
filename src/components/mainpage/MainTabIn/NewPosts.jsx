import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Spinner from "components/common/Spinner";
import magic from "../../../images/free-icon-magician-2267705.png";
// import api from "shared/api";

const NewPosts = () => {
  /**Recent Post 데이터 불러오기*/
  const getRecentPosteWithApi = async () => {
    // const { data } = await api.get("/post");
    const { data } = await axios.get("http://localhost:3001/post");
    return data;
  };

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
        {Recentquery.data.map((i) => (
          <li
            key={i.postId}
            className="bg-mWhite grid grid-cols-12 grid-flow-row-dense px-5 py-3 items-center rounded-lg mb-5 cursor-pointer"
          >
            {/* 게시글 카테고리 이름 */}
            <div className="col-start-1">{i.postCategory}</div>

            {/* 뱃지와 닉네임 */}
            <div className="w-48 col-span-2">
              <div className="flex align-center">
                <div className="mr-3 text-xl ">
                  <img src={magic} alt="" className="w-8" />
                </div>
                <div className="pr-5 flex text-sm text-gray-500 mt-2">
                  {i.nickname}
                </div>
              </div>
            </div>

            {/* 게시글 제목 */}
            <div className="flex-col col-span-8">
              <div className="pr-5">{i.postTitle}</div>
            </div>

            {/* 게시글 작성일 */}
            <div className="grid justify-items-end mr-5">
              <div>{i.createdAt}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewPosts;
