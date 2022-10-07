import React from "react";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "shared/api";
// 아이콘
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const BestReview = () => {
  const navigate = useNavigate();
  /**Best Review 데이터 불러오기*/
  const getBestReviewWithApi = async () => {
    const { data } = await api.get("/main/best");
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
        {BestReviewquery.data.data.map((i) => (
          <li
            key={i.reviewId}
            onClick={() => {
              navigate(
                `/detail/${i.movieId}/${i.title}${i.posterPath.split(".")[0]}`
              );
            }}
            className="bg-mWhite hover:bg-neutral-300 px-5 py-2 items-center rounded-lg mb-5 last:mb-0 cursor-pointer "
          >
            <div className=" flex-col ">
              <div className="lg:flex lg:justify-between lg:items-center">
                {/* 영화제목 */}
                <div className=" pr-5 text-lg font-bold text-mBlack">
                  {i.title}
                </div>
                {/* 뱃지와 닉네임 */}
                <div className="flex">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                    alt="profile"
                    className="w-6 mr-3"
                  />
                  <div className="pr-5 flex text-sm text-mGray mt-1 ">
                    {i.nickname}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex grow w-4/5 ">
                  {/* 별점 */}
                  <div className="flex text-mYellow w-28 pt-1">
                    {starIcon(i.oneLineReviewStar)}
                  </div>
                  {/* 한줄평 내용 */}
                  <div className="truncate w-10/12 py-1">
                    <span className="pl-2 pr-16 ">
                      {i.oneLineReviewContent}
                    </span>
                  </div>
                </div>

                {/* 좋아요 수 */}
                <div className="flex mx-5 bg-mGray px-3 py-1 rounded-lg">
                  <FaThumbsUp className="mr-2 text-mYellow " />
                  <div className="text-mCream">{i.likeNum}</div>
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
