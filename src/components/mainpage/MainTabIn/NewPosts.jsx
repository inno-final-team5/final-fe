import React from "react";
import { useQuery } from "react-query";
import Spinner from "components/common/Spinner";
import magic from "../../../images/free-icon-magician-2267705.png";
import api from "shared/api";

const NewPosts = () => {
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
        {Recentquery.data.data.map((i) => (
          <li
            key={i.postId}
            setPostDate={i.createdAt}
            className="bg-mWhite grid-rows-2 grid-cols-12 grid-flow-row-dense px-5 py-3 md:py-7 items-center rounded-lg mb-5 cursor-pointer md:grid md:h-14 "
          >
            <>
              {/* 게시글 카테고리 이름 */}
              <div className="col-start-1 w-28">{i.postCategory}</div>

              {/* 뱃지와 닉네임 */}
              <div className="col-span-2 mt-3 md:mt-0 w-28">
                <div className="flex align-center">
                  <img src={magic} alt="" className="w-6 mr-3" />
                  <div className="pr-5 flex text-sm text-gray-500 ">
                    {i.nickname}
                  </div>
                </div>
              </div>
            </>
            <>
              {/* 게시글 제목 */}
              <div className=" col-span-8 truncate">
                <div className="pr-5">{i.postTitle}</div>
              </div>

              {/* 게시글 작성일 */}
              <div className="grid justify-items-end mr-5 text-sm">
                {/* 작성일+시간중에 작성일만 표시하기 */}
                <div>{i.createdAt.split("T")[0]}</div>
              </div>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewPosts;
