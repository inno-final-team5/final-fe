import React from "react";
import { useQuery } from "react-query";
import Spinner from "components/common/Spinner";
import magic from "../../../images/free-icon-magician-2267705.png";
import api from "shared/api";
import { useNavigate } from "react-router-dom";
const NewPosts = () => {
  const navigate = useNavigate();
  /**Recent Post 데이터 불러오기*/
  const getRecentPosteWithApi = async () => {
    // const { data } = await api.get("/post");
    const { data } = await api.get("/main/post");
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
        {Recentquery.data.data.map((recent) => (
          <li
            key={recent.postId}
            onClick={() => {
              navigate(`/community/detail/${recent.postId}`);
            }}
            className="bg-mWhite grid-rows-2 grid-cols-12 grid-flow-row-dense px-5 py-3 md:py-7 items-center rounded-lg mb-5 cursor-pointer md:grid md:h-10"
          >
            <>
              {/* 게시글 카테고리 이름 */}
              <div className="w-14 mt-2 md:mt-0">{recent.postCategory}</div>
              <hr className="border-solid" />
              {/* 뱃지와 닉네임 */}
              <div className="col-span-2 my-3 md:my-0 w-28">
                <div className="flex align-center">
                  <img src={magic} alt="" className="w-6 mr-3" />
                  <div className="pr-5 flex text-sm text-gray-500 ">
                    {recent.nickname}
                  </div>
                </div>
              </div>
            </>
            <>
              {/* 게시글 제목 */}
              <div className=" col-span-7 truncate w-10/12 h-5 ">
                <span className="pr-5">{recent.postTitle}</span>
              </div>

              {/* 게시글 작성일 */}
              <div className="grid col-span-12 justify-items-end mr-5 text-sm">
                {/* 작성일+시간중에 작성일만 표시하기 */}
                <div>{recent.createdAt.split("T")[0]}</div>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewPosts;
