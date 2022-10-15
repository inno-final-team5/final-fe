import React, { useState } from "react";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import Oneline from "./Oneline";
import { api } from "shared/api";
import { useParams } from "react-router-dom";
import { getOnelineList } from "apis/oneLineReviewApi";

function OnelineList() {
  const params = useParams();
  const id = params.id;
  const [success, setSuccess] = useState([]);
  /**한줄평 리스트 불러오기 */
  const getOnelineList = () => {
    return api.get(`/movie/${id}/one-line-review`);
  };
  const onelineQuery = useQuery("onelineList", getOnelineList, {
    onSuccess: (data) => {
      setSuccess(data.data.data);
    },
  });
  if (onelineQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-6 pb-6 ">
      {success.length > 0 ? (
        <>
          <div className=" sm:w-5/6 lg:w-full pr-8 pt-0 pb-4 container mx-auto rounded-3xl bg-mGray ">
            <section className="text-gray-600 body-font ml-10 overflow-hidden">
              {onelineQuery?.data.data.data.map((line) => (
                <Oneline {...line} key={line.reviewId} />
              ))}
            </section>
          </div>
        </>
      ) : (
        <>
          <div className=" sm:w-5/6 lg:w-full container mx-auto pr-8 pt-10 pb-10 rounded-3xl bg-mGray ">
            <section className="text-mYellow text-xl body-font ml-10 overflow-hidden">
              <p>댓글이 없어요🥲</p>
              <p>첫 한줄평을 남겨주세요</p>
            </section>
          </div>
        </>
      )}
    </div>
  );
}

export default OnelineList;
