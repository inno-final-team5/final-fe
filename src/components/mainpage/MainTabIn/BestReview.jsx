import React from "react";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import api from "shared/api";
import { FaStar } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import gun from "../../../images/free-icon-western-8136323.png";

const BestReview = () => {
  /**Best Review 데이터 불러오기*/
  const getBestReviewWithApi = async () => {
    const { data } = await api.get("/best");
    return data;
  };

  /**데이터가 onSuccess일때 가져오기*/
  const BestReviewquery = useQuery("bestReview", getBestReviewWithApi, {
    onSuccess: () => {},
  });
  if (BestReviewquery.isLoading) {
    return <Spinner />;
  }

  /**별점에 따른 별 갯수*/
  const starIcon = (n) => {
    const star = [];
    for (let i = 0; i < n; i++) {
      star.push(<FaStar />);
    }
    return star;
  };

  return (
    <div>
      <ul>
        {BestReviewquery.data.map((i) => (
          <li
            key={i.movieId}
            className="bg-mWhite  px-5 py-3 items-center rounded-lg mb-5 cursor-pointer"
          >
            <div className=" flex-col ">
              {/* 영화제목 */}
              <div className=" pr-5 mb-2.5 text-xl font-bold ">{i.title}</div>

              <div className="flex justify-between mb-2">
                <div className="flex">
                  {/* 뱃지와 닉네임 */}
                  <div className="flex align-center">
                    <div className="mr-3 text-xl ">
                      <img src={gun} alt="" className="w-8" />
                    </div>
                    <div className="pr-5 flex text-xs text-gray-500 mt-2">
                      {i.oneLineReview.nickname}
                    </div>
                  </div>

                  {/* 별점 */}
                  <div className=" flex text-mYellow mt-2">
                    {starIcon(i.oneLineReview.star)}
                  </div>
                </div>

                {/* 좋아요 수 */}
                <div className="flex-col mx-5">
                  <FiThumbsUp className=" mb-1" />
                  <div>{i.oneLineReview.oneLineReviewLikeCount}</div>
                </div>
              </div>

              {/* 한줄평 내용 */}
              <div className="flex ">
                <div className="pl-2 pr-16 text-sm ">
                  {i.oneLineReview.content}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestReview;
