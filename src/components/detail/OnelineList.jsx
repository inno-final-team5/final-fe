import React from "react";
import Spinner from "components/common/Spinner";
import axios from "axios";
import { useQuery } from "react-query";
import Oneline from "./Oneline";

function OnelineList() {
  const getOnelineList = () => {
    return axios.get("http://localhost:3001/onelineList");
  };

  const onelineQuery = useQuery("onelineList", getOnelineList, {
    onSuccess: (data) => {},
  });
  if (onelineQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-6 pb-6 ">
      <div className=" pr-8 pt-0 pb-4 rounded-3xl bg-mGray ">
        <section class="text-gray-600 body-font ml-10 overflow-hidden">
          {onelineQuery.data.data.map((line) => (
            <Oneline {...line} key={line.oneLineReview.oneLineReviewId} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default OnelineList;
