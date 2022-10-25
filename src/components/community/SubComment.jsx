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

  const updateSub = (id) => {
    console.log(id);
    if (id) {
      setUpdateSubCommentMode(true);
    }
  };

  const cancelSub = () => {
    setUpdateSubCommentMode(false);
  };

  const submitSub = () => {
    updateSubCommentMutation.mutate({
      subCommentId: subCommentData[0].subCommentId,
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
