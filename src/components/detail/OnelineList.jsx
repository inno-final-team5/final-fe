import React from "react";

import axios from "axios";
import { useQuery } from "react-query";
import Oneline from "./Oneline";
import { data } from "autoprefixer";

function OnelineList() {
  const getOnelineList = () => {
    return axios.get("http://localhost:3001/onelineList");
  };

  const onelineQuery = useQuery("onelineList", getOnelineList, {
    onSuccess: (data) => {
      const list = data.data.map((line) => console.log(line.oneLineReview.oneLineReviewId));
    },
  });
  return (
    <div className="mt-6 pb-6 ">
      <div className=" pr-10 pt-0 pb-4 rounded-3xl bg-mGray container mx-auto flex px-0 py-24 md:flex-row flex-col items-center">
        <section class="text-gray-600 body-font overflow-hidden">
          {data.data?.map((line) => (
            <Oneline {...line} key={line.oneLineReview.oneLineReviewId} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default OnelineList;
