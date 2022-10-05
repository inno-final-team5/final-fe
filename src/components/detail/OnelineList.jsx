import React from "react";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import Oneline from "./Oneline";
import { api } from "shared/api";
import { useParams } from "react-router-dom";
import OnelineForm from "./OnelineForm";

function OnelineList() {
  const params = useParams();
  const id = params.id;

  const getOnelineList = () => {
    return api.get(`/movie/${id}/one-line-review`);
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
        <section className="text-gray-600 body-font ml-10 overflow-hidden">
          {onelineQuery?.data.data.data.map((line) => (
            <Oneline {...line} key={line.reviewId} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default OnelineList;
