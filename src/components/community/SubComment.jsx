<<<<<<< HEAD
import tw from "tailwind-styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import BadgeEmoji from "components/common/BadgeEmoji";
import { useQueryClient, useMutation } from "react-query";
import { deleteSubComment, updateSubComment } from "apis/postApi";
import { Toast } from "components/common/Toast";
import { useState, useRef } from "react";

const Subcomment = ({ commentData }) => {
  const queryClient = useQueryClient();
  const nickname = localStorage.getItem("nickname");
  const [updatSubCommentMode, setUpdateSubCommentMode] = useState(false);
=======
import { useContext, useState, useRef } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useQueryClient, useMutation } from "react-query";
import UserContext from "contexts/UserContext";
import { Toast } from "components/common/Toast";
import { deleteSubComment, updateSubComment } from "apis/postApi";
import CommentItemHeader from "./CommentItemHeader";

const SubComment = ({ data }) => {
  console.log(data);
  const queryClient = useQueryClient();
  const { nickname } = useContext(UserContext);
  const [updateSubCommentMode, setUpdateSubCommentMode] = useState(false);
>>>>>>> develop
  const updateSubCommentBody = useRef("");

  const deleteSub = (id) => {
    deleteSubCommentMutation.mutate({
      subCommentId: id,
    });
  };

  const deleteSubCommentMutation = useMutation(deleteSubComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      Toast.fire({ icon: "success", title: "삭제되었습니다." });
    },
    onError: (error) => {
      console.log(error);
    },
  });

<<<<<<< HEAD
  const updateSub = (id) => {
    console.log(id);
    if (id) {
      setUpdateSubCommentMode(true);
    }
=======
  const updateSub = () => {
    setUpdateSubCommentMode(true);
    console.log(updateSubCommentMode);
>>>>>>> develop
  };

  const cancelSub = () => {
    setUpdateSubCommentMode(false);
  };

<<<<<<< HEAD
  const submitSub = () => {
    updateSubCommentMutation.mutate({
      subCommentId: subCommentData[0].subCommentId,
=======
  const submitSub = (id) => {
    if (updateSubCommentBody.current.value.length < 1) {
      return Toast.fire({ icon: "warning", title: "내용이 없습니다." });
    }

    updateSubCommentMutation.mutate({
      SubCommentId: id,
>>>>>>> develop
      subCommentContent: updateSubCommentBody.current.value,
    });
  };

  const updateSubCommentMutation = useMutation(updateSubComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("post");
      setUpdateSubCommentMode(false);
      Toast.fire({ icon: "success", title: "수정되었습니다." });
    },
    onError: (error) => {
      console.log(error);
    },
  });

<<<<<<< HEAD
  let subCommentData = commentData.subCommentResponseDtoList;

  console.log(subCommentData);

  return (
    <SubComment>
      {!updatSubCommentMode ? (
        <>
          {subCommentData.map((subCommentData) => (
            <SubCommentContainer key={subCommentData.subCommentId}>
              <div className="flex-auto">
                <NicknameContainer>
                  <BadgeEmoji
                    className="mr-2"
                    badgeId={subCommentData.badgeId}
                  />
                  <p className="mr-2">{subCommentData.nickname}</p>
                  <p>
                    {new Date(subCommentData.createdAt).toLocaleDateString(
                      "ko-KR"
                    )}
                  </p>
                </NicknameContainer>
              </div>
              <SubCommentContextContainer>
                <p>
                  {subCommentData.subCommentId},
                  {subCommentData.subCommentContent}
                </p>
              </SubCommentContextContainer>

              {subCommentData.nickname === nickname ? (
                <CommentButtonContainer>
                  <button
                    onClick={() => updateSub(subCommentData.subCommentId)}
                  >
                    <FaEdit className="mr-1" />
                  </button>
                  <button
                    onClick={() => deleteSub(subCommentData.subCommentId)}
                  >
                    <FaTrash className="mr-1" />
                  </button>
                </CommentButtonContainer>
              ) : (
                <></>
              )}
            </SubCommentContainer>
          ))}
        </>
      ) : (
        <>
          {subCommentData.map((subCommentData) => (
            <SubCommentContainer key={subCommentData.id}>
              <div className="flex-auto">
                <NicknameContainer>
                  <BadgeEmoji
                    className="mr-2"
                    badgeId={subCommentData.badgeId}
                  />
                  <p className="mr-2">{subCommentData.nickname}</p>
                  <p>
                    {new Date(subCommentData.createdAt).toLocaleDateString(
                      "ko-KR"
                    )}
                  </p>
                </NicknameContainer>
              </div>
              <SubCommentContextContainer>
                <textarea
                  className="bg-mCream w-full focus:outline-none p-2 resize-none"
                  rows="3"
                  autoFocus
                  defaultValue={subCommentData.subCommentContent}
                  ref={updateSubCommentBody}
                  required
                ></textarea>
              </SubCommentContextContainer>
              {subCommentData.nickname === nickname ? (
                <CommentButtonContainer>
                  <button onClick={cancelSub}>
                    <AiOutlineClose className="mr-1" />
                  </button>
                  <button onClick={submitSub}>
                    <AiOutlineCheck className="mr-1" />
                  </button>
                </CommentButtonContainer>
              ) : (
                <></>
              )}
            </SubCommentContainer>
          ))}
        </>
      )}
    </SubComment>
  );
};

const NicknameContainer = tw.div`
flex text-s text-mBlack w-fit h-full mb-2
`;

const CommentButtonContainer = tw.div`
flex justify-end
`;

const SubComment = tw.div`
ml-10
`;

const SubCommentContainer = tw.div`
w-full h-full bg-mCream rounded-xl p-4 my-2
`;

const SubCommentContextContainer = tw.div`
w-full h-full bg-mCream rounded-xl p-2
`;

export default Subcomment;
=======
  return (
    <div className="mr-10">
      {!updateSubCommentMode ? (
        <div
          key={data.subCommentId}
          className="bg-mCream py-4 px-5 text-mBlack rounded-lg flex flex-col gap-2"
        >
          <CommentItemHeader
            badgeId={data.badgeId}
            nickname={data.nickname}
            createdAt={data.createdAt}
          />
          <p>{data.subCommentContent}</p>

          {nickname === data.nickname ? (
            <div className="flex flex-row justify-end gap-2">
              <button onClick={updateSub}>
                <FaEdit className="mr-1" />
              </button>
              <button
                onClick={() => {
                  deleteSub(data.subCommentId);
                }}
              >
                <FaTrash className="mr-1" />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div
          key={data.subCommentId}
          className="bg-mCream py-4 px-5 text-mBlack rounded-lg flex flex-col gap-2"
        >
          <CommentItemHeader
            badgeId={data.badgeId}
            nickname={data.nickname}
            createdAt={data.createdAt}
          />
          <textarea
            className="bg-mCream w-full focus:outline-none p-2 resize-none"
            rows="3"
            autoFocus
            defaultValue={data.subCommentContent}
            ref={updateSubCommentBody}
            required
          ></textarea>
          {nickname === data.nickname ? (
            <div className="flex flex-row justify-end gap-2">
              <button onClick={cancelSub}>
                <AiOutlineClose className="mr-1" />
              </button>
              <button
                onClick={() => {
                  submitSub(data.subCommentId);
                }}
              >
                <AiOutlineCheck className="mr-1" />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default SubComment;
>>>>>>> develop
