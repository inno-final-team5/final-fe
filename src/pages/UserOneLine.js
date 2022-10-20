import Layout from "components/common/Layout";
import React from "react";
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

  const userlineQuery = useQuery(["userlineList", user], () => getUserLineList(user), {
    onSuccess: (data) => {
      console.log(data);
      window.scrollTo(0, 0);
    },
  });
  if (userlineQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <Layout>
      <div className="text-mCream text-base md:text-2xl text-mCream ml-10 mt-6 mb-6 lg:mt-4 md:mt-0">
        <BadgeEmoji badgeId={userlineQuery?.data.data[0].badgeId} />
        {user} 님이 남기신 한줄평입니다
      </div>
      <OnelineListSpace className="p-8">
        {userlineQuery?.data.data.map((line) => (
          <Userline {...line} key={line.reviewId} />
        ))}
      </OnelineListSpace>
    </Layout>
  );
};

export default UserOneLine;
