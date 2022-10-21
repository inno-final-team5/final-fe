import Layout from "components/common/Layout";
import React, { useState } from "react";
import { OnelineListSpace } from "components/detail/OnelineList";
import { useParams } from "react-router-dom";
import { getUserLineList } from "apis/oneLineReviewApi";
import { useQuery } from "react-query";
import Spinner from "components/common/Spinner";
import BadgeEmoji from "../components/common/BadgeEmoji";
import Userline from "components/detail/Userline";

const UserOneLine = () => {
  const params = useParams();
  const user = params.user;
  const [visible, setVisible] = useState(6);

  const userlineQuery = useQuery(["userlineList", user], () => getUserLineList(user), {
    onSuccess: (data) => {
      console.log(data);
      window.scrollTo(0, 0);
    },
  });
  if (userlineQuery.isLoading) {
    return <Spinner />;
  }

  const showMoreComments = (prev) => {
    setVisible((prev) => prev + 6);
  };

  return (
    <Layout>
      <div className="text-mCream text-base md:text-2xl text-mCream ml-10 mt-6 mb-6 lg:mt-4 md:mt-0">
        <BadgeEmoji badgeId={userlineQuery?.data.data[0].badgeId} />
        {user} 님이 남기신 한줄평입니다
      </div>
      <OnelineListSpace className="p-8 content-center justify-center content-center place-items-center place-content-center">
        {userlineQuery?.data.data.map((line) => (
          <Userline {...line} key={line.reviewId} />
        ))}

        <div>
          {/* <button className="mt-6 hover:text-bold bg-mYellow px-10 py-3 rounded-xl hover:bg-mCream " onClick={showMoreComments}>
            더보기
          </button> */}
        </div>
      </OnelineListSpace>
    </Layout>
  );
};

export default UserOneLine;
