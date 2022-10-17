import React, { useState } from "react";
import Spinner from "components/common/Spinner";
import { useQuery } from "react-query";
import Oneline from "./Oneline";
import { useParams } from "react-router-dom";
import { getOneLineList } from "apis/oneLineReviewApi";
import tw from "tailwind-styled-components/";

function OnelineList() {
  const params = useParams();
  const id = params.id;
  const [success, setSuccess] = useState([]);

  const onelineQuery = useQuery(["onelineList", id], () => getOneLineList(id), {
    onSuccess: (data) => {
      setSuccess(data.data);
    },
  });
  if (onelineQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-6">
      {success.length > 0 ? (
        <>
          <OnelineListSpace>
            {onelineQuery?.data.data.map((line) => (
              <Oneline {...line} key={line.reviewId} />
            ))}
          </OnelineListSpace>
        </>
      ) : (
        <>
          <OnelineListSpace className="pt-12 pb-12">
            <OnelineNone>
              <p>댓글이 없어요🥲</p>
              <p>첫 한줄평을 남겨주세요</p>
            </OnelineNone>
          </OnelineListSpace>
        </>
      )}
    </div>
  );
}

export default OnelineList;

const OnelineListSpace = tw.div`
sm:w-5/6 lg:w-full p-6 pt-1 pb-3 container mx-auto rounded-3xl bg-mGray 
`;
const OnelineNone = tw.section`
text-mYellow text-xl ml-8
`;
