import React from "react";
import SubComment from "./SubComment";

const SubCommentList = ({ commentData }) => {
  return (
    <>
      {commentData.subCommentResponseDtoList?.map((subComment) => {
        return <SubComment data={subComment} />;
      })}
    </>
  );
};

export default SubCommentList;
